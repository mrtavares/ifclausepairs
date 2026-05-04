const set1Parts = [
    "I will become a digital influencer", "if I have a lot of followers.",
    "If I lived in the 18th century,", "I would travel by steam train.",
    "The British will be very angry", "if we throw tea into the harbor.",
    "If I were a chameleon,", "I would change color to hide.",
    "Truth will disappear from the internet", "if people share fake news.",
    "If you spend all day on TikTok,", "you will fail your English exam.",
    "I would meet Albert Einstein", "if I had a time machine.",
    "If the predator is faster,", "it will catch its prey easily.",
    "I would fight for human rights", "if I were an inspiring leader.",
    "If we use 5G technology,", "the internet will be much faster.",
    "I would donate money to science", "if I won the lottery.",
    "If you click on that suspicious link,", "you will get a virus on your phone.",
    "The ecosystem will be in danger", "if we don't protect the species.",
    "If Edward Jenner were alive today,", "he would be proud of modern vaccines.",
    "You will feel much safer online", "if you protect your privacy.",
    "If communication were impossible,", "the world would be very lonely.",
    "The teacher will be happy", "if you participate in the activity.",
    "If I had a better smartphone,", "I would take amazing photos.",
    "We will find the truth", "if we check the facts carefully.",
    "If I were a famous YouTuber,", "I would record videos every day.",
    "People will follow your example", "if you are a good leader.",
    "If I lived in a developed country,", "I would have easy access to the internet.",
    "You will learn a lot", "if you read the interdisciplinary guide.",
    "If science didn't exist,", "we wouldn't have electricity.",
    "I will share your post", "if it is interesting and true."
];

const set2Parts = [
    "You won't be able to distinguish fact from fiction", "unless you develop your critical thinking.",
    "If Edward Jenner hadn't promoted vaccination,", "millions of people could still die from smallpox.",
    "We might understand the world better", "if we studied the science of electromagnetic waves.",
    "Unless we protect our personal data,", "digital platforms will manipulate our choices.",
    "You can inspire others with your original ideas", "if you create a unique final product.",
    "If people didn't have access to the internet,", "they couldn't communicate globally in seconds.",
    "Democracy will be in serious danger", "unless we stop the spread of disinformation.",
    "If I were a leader during the French Revolution,", "I might fight for the ideals of Liberty.",
    "You will become just another \"thumbs-up\" follower", "unless you stop and reflect on what you see.",
    "Migratory birds could not travel such long distances", "if they didn't use clever energy-saving strategies.",
    "If scientists didn't explore the forces of nature,", "we wouldn't have modern telecommunications.",
    "You can exercise your freedom of choice", "if you verify the reliability of information.",
    "Unless the population is well-informed,", "public health missions will face many challenges.",
    "If social media didn't exist,", "our daily lives might be much more private.",
    "People will respect your dignity", "unless you act without moral values.",
    "If you analyze different sources of information,", "you will interpret the dynamics of ecosystems better.",
    "The economy would grow much slower", "if transport systems were not efficient.",
    "Unless we respect the rights of others,", "we will never live in a truly free society.",
    "If you were a predator like a tiger,", "you would benefit from camouflaging in the wild.",
    "You won't understand history", "unless you study the context of past revolutions.",
    "If the 18th-century bourgeoisie hadn't innovated,", "the Industrial Revolution might never have started.",
    "We can improve human life significantly", "if we apply scientific knowledge correctly.",
    "Unless you check the \"Fact or Fiction\" section,", "you will believe everything the influencers say.",
    "If we lived in a world without technology,", "we would have to send letters by horse.",
    "Freedom of speech will only be safe", "unless we allow censors to control the truth."
];

const set3Parts = [
    "If you study history,", "you will understand the present better.",
    "The industrial revolution would be impossible", "if steam engines hadn't been invented.",
    "If citizens exercise their right to vote,", "democracy becomes stronger.",
    "We could solve many global problems", "if world leaders cooperated more.",
    "If you respect cultural differences,", "you will make friends from all over the world.",
    "The environment will recover", "if we reduce plastic waste significantly.",
    "If the library were open 24/7,", "I would spend all my nights there.",
    "You will improve your vocabulary", "if you read books in English every day.",
    "If the internet crashed tomorrow,", "the world would face total chaos.",
    "We would have more free time", "if robots did all the manual labor.",
    "If you help someone in need,", "you will feel a great sense of purpose.",
    "Public health will improve", "if everyone has access to clean water.",
    "If I were a time traveler,", "I would visit ancient Egypt.",
    "You will achieve your goals", "if you work hard and stay focused.",
    "If space exploration were cheaper,", "we would have colonies on Mars.",
    "The project will be successful", "if we distribute tasks fairly.",
    "If you practice meditation,", "you will reduce your stress levels.",
    "Animals will lose their habitats", "if we continue to destroy forests.",
    "If I spoke ten languages,", "I would work as a UN translator.",
    "You will find inner peace", "if you learn to forgive others.",
    "If schools focused more on creativity,", "students would be more motivated.",
    "The city would be much quieter", "if everyone used electric bicycles.",
    "If you save money now,", "you will have a better future.",
    "Communication will be clearer", "if we listen more than we talk.",
    "If I were the president,", "I would invest more in education."
];

const set4Parts = [
    "If you use a strong password,", "your accounts will be more secure.",
    "Artificial intelligence would be a dream", "if Turing hadn't defined computing.",
    "If you post something online,", "it will stay there forever.",
    "We could prevent cyberbullying", "if we taught digital empathy in schools.",
    "If you follow your passion,", "you will never work a day in your life.",
    "The smartphone battery will last longer", "if you lower the screen brightness.",
    "If I were a software engineer,", "I would create helpful apps for everyone.",
    "You will be more productive", "if you turn off notifications.",
    "If virtual reality were perfect,", "we wouldn't need to travel for meetings.",
    "Cybersecurity will become more important", "if more devices connect to the web.",
    "If you share your knowledge,", "you will help the community grow.",
    "The video will go viral", "if it has a catchy thumbnail.",
    "If I could code in Python,", "I would automate all my repetitive tasks.",
    "You will avoid many scams", "if you never share your private keys.",
    "If technology continues to evolve,", "our lives will change drastically.",
    "The server will crash", "if too many users log in at once.",
    "If you backup your files,", "you won't lose your work if the PC breaks.",
    "Climate change will accelerate", "if we don't switch to green energy.",
    "If I were a game developer,", "I would design immersive open worlds.",
    "You will feel more energized", "if you take breaks from screens.",
    "If everyone had high-speed internet,", "education would be truly global.",
    "The app will run smoother", "if you update it to the latest version.",
    "If you think before you click,", "you will stay safe from phishing.",
    "Privacy will disappear", "if we don't demand better regulations.",
    "If I had an unlimited data plan,", "I would stream music all day."
];

// UNIVERSAL MAPPING: To make the Teacher Panel work for all sets, 
// we will use the SAME randomized mapping for ALL sets.
// This way, a pair in Set 1 is the same pair of numbers in Set 2, 3, and 4.
const universalMapping = [
    32, 10, 48, 15, 2, 41, 23, 5, 37, 12, 
    50, 7, 29, 44, 18, 1, 33, 20, 9, 46, 
    4, 26, 14, 31, 6, 43, 11, 38, 17, 49, 
    13, 34, 47, 8, 24, 40, 19, 3, 27, 42, 
    21, 36, 35, 22, 39, 16, 25, 45, 28, 30
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

    const mappedIndex = universalMapping[num - 1] - 1;
    let sentence = "";

    switch(set) {
        case 1: sentence = set1Parts[mappedIndex]; break;
        case 2: sentence = set2Parts[mappedIndex]; break;
        case 3: sentence = set3Parts[mappedIndex]; break;
        case 4: sentence = set4Parts[mappedIndex]; break;
        default: sentence = set1Parts[mappedIndex];
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