const form = document.getElementById('logoForm');
const output = document.getElementById('output');
const copyButton = document.getElementById('copyButton');
const technicalDetails = document.getElementById('technicalDetails');

let selectedTags = [];

technicalDetails.addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
        const tag = e.target;
        const value = tag.getAttribute('data-value');
        
        if (tag.classList.contains('selected')) {
            tag.classList.remove('selected');
            selectedTags = selectedTags.filter(tagValue => tagValue !== value);
        } else {
            tag.classList.add('selected');
            selectedTags.push(value);
        }
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value || 'Unnamed Brand';
    const style = document.getElementById('style').value;
    const color = document.getElementById('color').value || 'Not specified';
    const element = document.getElementById('element').value || 'Not specified';
    const theme = document.getElementById('theme').value;
    const aspectRatio = document.getElementById('aspectRatio').value;
    const font = document.getElementById('font').value;
    const background = document.getElementById('background').value || 'Not specified';
    const technical = selectedTags.length > 0 ? selectedTags.join(', ') : 'None';

    const prompt = `Create a highly detailed and professional ${style.toLowerCase()} logo design for "${name}". 
The design features a central ${element.toLowerCase()} element, crafted with a ${color.toLowerCase()} color scheme and ${aspectRatio.toLowerCase()} shape. 
The typography utilizes the ${font.toLowerCase()} font style, enhanced with a vibrant ${background.toLowerCase()} background. 
Incorporate ${technical.toLowerCase()} effects to elevate the aesthetic, targeting a young audience (17-35 years) passionate about ${theme.toLowerCase()}. 
The logo should embody a modern, dynamic vibe inspired by Anambas' rich Malay heritage.`;

    output.textContent = prompt;
    copyButton.style.display = 'block';
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy prompt. Please try again.');
    });
});