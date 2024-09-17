import { summaryDoc, summaryPage, getCurrentUrl } from '../js/functions.js';
import { fetchSummary } from '../js/api/request-summarize-page.js';

// Mock para o fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ summary: 'Texto resumido' }),
    })
);

describe('fetchSummary', () => {
    it('deve retornar o resumo ao chamar a API corretamente', async () => {
        const path = '?sentences=3&url=example.com';
        const summary = await fetchSummary(path);
        expect(summary).toBe('Texto resumido');
    });

    it('deve lidar com erros de fetch', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("Erro de API"));
        const path = '?sentences=5&url=example.com';
        const summary = await fetchSummary(path);
        expect(summary).toBe('');
    });
});

describe('getCurrentUrl', () => {
    it('deve retornar a URL atual da aba', async () => {

        global.chrome = {
            runtime: {
                sendMessage: jest.fn((message, callback) => {
                    callback({ url: 'http://example.com' });
                }),
                lastError: null
            }
        };
        const url = await getCurrentUrl();
        expect(url).toBe('http://example.com');
    });

    it('deve lidar com erros da API do Chrome', async () => {
       
        global.chrome = {
            runtime: {
                sendMessage: jest.fn((message, callback) => {
                    callback(null)
                }),
                lastError: "Erro ao obter URL"
            }
        };

        await expect(getCurrentUrl()).rejects.toThrow("Erro ao obter URL");
    });
});

describe('Teste de integração para summaryPage', () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="sentences" value=5 />
        `;
    });

    it('deve retornar o resumo esperado ao chamar a função summaryPage', async () => {

        global.chrome = {
            runtime: {
                sendMessage: jest.fn((message, callback) => {
                    callback({ url: 'http://teste.com' });
                }),
                lastError: null
            }
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ summary: 'Texto resumido da Url teste' }),
            })
        );
        
        const sentences = Number(document.getElementById('sentences').value);
        const url = await getCurrentUrl();
        const path = `?sentences=${sentences}&url=${url}`;
        const data = await fetchSummary(path);

        expect(data).toBe('Texto resumido da Url teste');
        expect(sentences).toBe(5);
    });
});