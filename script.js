const set1Parts = [
    "I will become a digital influencer",
    "if I have a lot of followers.",
    "If I lived in the 18th century,",
    "I would travel by steam train.",
    "The British will be very angry",
    "if we throw tea into the harbor.",
    "If I were a chameleon,",
    "I would change color to hide.",
    "Truth will disappear from the internet",
    "if people share fake news.",
    "If you spend all day on TikTok,",
    "you will fail your English exam.",
    "I would meet Albert Einstein",
    "if I had a time machine.",
    "If the predator is faster,",
    "it will catch its prey easily.",
    "I would fight for human rights",
    "if I were an inspiring leader.",
    "If we use 5G technology,",
    "the internet will be much faster.",
    "I would donate money to science",
    "if I won the lottery.",
    "If you click on that suspicious link,",
    "you will get a virus on your phone.",
    "The ecosystem will be in danger",
    "if we don't protect the species.",
    "If Edward Jenner were alive today,",
    "he would be proud of modern vaccines.",
    "You will feel much safer online",
    "if you protect your privacy.",
    "If communication were impossible,",
    "the world would be very lonely.",
    "The teacher will be happy",
    "if you participate in the activity.",
    "If I had a better smartphone,",
    "I would take amazing photos.",
    "We will find the truth",
    "if we check the facts carefully.",
    "If I were a famous YouTuber,",
    "I would record videos every day.",
    "People will follow your example",
    "if you are a good leader.",
    "If I lived in a developed country,",
    "I would have easy access to the internet.",
    "You will learn a lot",
    "if you read the interdisciplinary guide.",
    "If science didn't exist,",
    "we wouldn't have electricity.",
    "I will share your post",
    "if it is interesting and true."
];

const set2Parts = [
    "You won't be able to distinguish fact from fiction",
    "unless you develop your critical thinking.",
    "If Edward Jenner hadn't promoted vaccination,",
    "millions of people could still die from smallpox.",
    "We might understand the world better",
    "if we studied the science of electromagnetic waves.",
    "Unless we protect our personal data,",
    "digital platforms will manipulate our choices.",
    "You can inspire others with your original ideas",
    "if you create a unique final product.",
    "If people didn't have access to the internet,",
    "they couldn't communicate globally in seconds.",
    "Democracy will be in serious danger",
    "unless we stop the spread of disinformation.",
    "If I were a leader during the French Revolution,",
    "I might fight for the ideals of Liberty.",
    "You will become just another \"thumbs-up\" follower",
    "unless you stop and reflect on what you see.",
    "Migratory birds could not travel such long distances",
    "if they didn't use clever energy-saving strategies.",
    "If scientists didn't explore the forces of nature,",
    "we wouldn't have modern telecommunications.",
    "You can exercise your freedom of choice",
    "if you verify the reliability of information.",
    "Unless the population is well-informed,",
    "public health missions will face many challenges.",
    "If social media didn't exist,",
    "our daily lives might be much more private.",
    "People will respect your dignity",
    "unless you act without moral values.",
    "If you analyze different sources of information,",
    "you will interpret the dynamics of ecosystems better.",
    "The economy would grow much slower",
    "if transport systems were not efficient.",
    "Unless we respect the rights of others,",
    "we will never live in a truly free society.",
    "If you were a predator like a tiger,",
    "you would benefit from camouflaging in the wild.",
    "You won't understand history",
    "unless you study the context of past revolutions.",
    "If the 18th-century bourgeoisie hadn't innovated,",
    "the Industrial Revolution might never have started.",
    "We can improve human life significantly",
    "if we apply scientific knowledge correctly.",
    "Unless you check the \"Fact or Fiction\" section,",
    "you will believe everything the influencers say.",
    "If we lived in a world without technology,",
    "we would have to send letters by horse.",
    "Freedom of speech will only be safe",
    "unless we allow censors to control the truth."
];

const selectionScreen = document.getElementById('selection-screen');
const displayScreen = document.getElementById('display-screen');
const setSelect = document.getElementById('set-select');
const numberInput = document.getElementById('number-input');
const showBtn = document.getElementById('show-btn');
const sentenceText = document.getElementById('sentence-text');

showBtn.addEventListener('click', () => {
    const set = parseInt(setSelect.value);
    const num = parseInt(numberInput.value);

    if (isNaN(num) || num < 1 || num > 50) {
        alert("Please enter a number between 1 and 50.");
        return;
    }

    let sentence = "";
    if (set === 1) {
        sentence = set1Parts[num - 1];
    } else {
        sentence = set2Parts[num - 1];
    }

    sentenceText.textContent = sentence;
    selectionScreen.classList.add('hidden');
    displayScreen.classList.remove('hidden');
});

// Allow 'Enter' key to trigger showBtn
numberInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showBtn.click();
    }
});