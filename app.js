/**
 * Calculadora de Texto
 * Analiza texto: cuenta palabras, caracteres, oraciones y párrafos.
 */

function analyzeText(text) {
    if (!text || text.trim().length === 0) {
        return {
            characters: 0,
            words: 0,
            sentences: 0,
            paragraphs: 0,
            longestWord: '—',
            shortestWord: '—'
        };
    }

    // Caracteres sin espacios
    const characters = text.replace(/\s/g, '').length;

    // Palabras
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // Palabra más larga y más corta
    const sortedByLength = [...words].sort((a, b) => b.length - a.length);
    const longestWord = sortedByLength[0] || '—';
    const shortestWord = sortedByLength[sortedByLength.length - 1] || '—';

    // Oraciones (separadas por . ! ?)
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;

    // Párrafos (separados por líneas vacías)
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphs.length;

    return {
        characters,
        words: wordCount,
        sentences: sentenceCount,
        paragraphs: paragraphCount,
        longestWord,
        shortestWord
    };
}

// Evento del botón
document.getElementById('analyzeBtn').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    const results = analyzeText(text);

    document.getElementById('charCount').textContent = results.characters;
    document.getElementById('wordCount').textContent = results.words;
    document.getElementById('sentenceCount').textContent = results.sentences;
    document.getElementById('paragraphCount').textContent = results.paragraphs;
    document.getElementById('longestWord').textContent = results.longestWord;
    document.getElementById('shortestWord').textContent = results.shortestWord;

    document.getElementById('results').classList.remove('hidden');
});
