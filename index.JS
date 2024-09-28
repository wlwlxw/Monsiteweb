const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "All good things come to those who wait.",
    "To be or not to be, that is the question.",
    "A journey of a thousand miles begins with a single step.",
    "Better late than never.",
    "No man is an island."
];

function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("random-text").innerText = sentences[randomIndex];
}

// Initialize with random content
window.onload = generateRandomContent;0
