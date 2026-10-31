export const profile = {
  name: 'Tanishk',
  firstName: 'Tanishk',
  tagline: 'I train AI models, not just use them.',
  subtitle:
    'AI/ML Engineer · LangGraph · RAG · AI Agents · LLMs · VP @AI/ML Club · Building in Public',
  email: 'tanishkk501@gmail.com',
  location: 'Sonipat, Haryana, India (131001)',
  linkedin: 'https://www.linkedin.com/in/imtanishk',
  github: 'https://github.com/tanishk-exe',
  resume: '/resume.pdf',
};

export const typewriterPhrases = [
  'Building RAG applications with LangChain.',
  'Fine-tuning LLMs and AI Agents.',
  'Teaching AI to the next generation.',
  'Turning curiosity into products.',
  'Learning in public, every single day.',
];

export const stats = [
  { value: '50K+', label: 'Movie reviews processed' },
  { value: '100', label: 'Days of Code completed' },
  { value: '5+', label: 'AI/ML projects shipped' },
  { value: '2', label: 'VP roles & counting' },
];

export const about = {
  paragraphs: [
    "I got tired of just using AI. So I started learning how to build it. That curiosity led me from Machine Learning and Deep Learning to NLP, Transformers, and now into GenAI applications.",
    "Over the past few months I've built projects in computer vision and NLP, completed the #100DaysOfCode challenge, and now I'm working on LLM-powered applications to better understand how modern AI products are built.",
    "I also enjoy teaching what I learn. As the Vice President of my college's AI/ML Club, I've found that explaining a concept is one of the best ways to truly understand it.",
    "Right now I'm looking for AI/ML and AI Engineering internship opportunities where I can learn from experienced engineers, contribute to real products, and keep building. Using AI is fun. Building it is even better.",
  ],
  education: [
    {
      school: 'Deenbandhu Chhotu Ram University of Science & Technology (DCRUST)',
      degree: 'B.Tech in Computer Science — CGPA: 7.12/10',
      years: '2023 – 2027',
      location: 'Murthal, Haryana',
    },
    {
      school: 'Saint Soldiers School',
      degree: 'Class X',
      years: '2020',
      location: 'Panchkula, Haryana',
    },
  ],
  certifications: [
    'Machine Learning Foundations — Amazon Web Services',
    'ML Foundations: Calculus — LinkedIn Learning',
    'ML Foundations: Statistics — LinkedIn Learning',
    'Claude 101',
    'Learning GitHub',
    'Python Data Structures and Algorithms',
  ],
  languages: [
    { name: 'Hindi', level: 'Native or Bilingual' },
    { name: 'English', level: 'Professional Working' },
    { name: 'Spanish', level: 'Elementary' },
    { name: 'Punjabi', level: 'Elementary' },
  ],
};

export const experience = [
  {
    role: 'Vice President of AI/ML Club',
    company: 'Gateway Education',
    location: 'Sonipat, Haryana',
    period: 'Feb 2026 — Present',
    current: true,
    points: [
      'Leading academic and technical initiatives in AI & ML, delivering structured training sessions as part of the GVAC curriculum integration.',
      'Conduct AI/ML training sessions covering core concepts and practical implementation.',
      'Mentor members in project development and hands-on learning.',
      'Collaborate with faculty to align club initiatives with academic objectives.',
      'Launched and organized a structured AI/ML GVAC cohort with weekly classes and hands-on workshops.',
      'Organized HackSwitch, a 6-hour hackathon — planning, execution, and participant coordination.',
      'Delivered AI Tools workshops as speaker, including a session for an international (Nepal) delegation.',
    ],
  },
  {
    role: 'Vice President of Student Council',
    company: 'Gateway Education',
    location: 'Sonipat, Haryana',
    period: 'Apr 2026 — Aug 2026',
    current: false,
    points: [
      'Coordinated college-level events and student initiatives, improving participation and engagement.',
      'Collaborated with teams to plan and execute large-scale academic and technical events.',
      'Apparently I enjoy having zero free time.',
    ],
  },
  {
    role: 'President of Movie/Theatre Club',
    company: 'Gateway Education',
    location: 'Sonipat, Haryana',
    period: 'Oct 2024 — Feb 2026',
    current: false,
    points: [
      'Led the Movie & Theatre Club by planning and executing creative, large-scale campus events.',
      'Organized a Movie Meme Contest and a Short Film Competition.',
      'Contributed to the execution of Yugantar Festival 2025.',
      'Developed leadership, communication, and problem-solving skills while working with cross-functional teams.',
    ],
  },
  {
    role: 'Freelance Video Editor',
    company: 'Independent',
    location: 'Delhi, India',
    period: 'Jan 2024 — Jan 2025',
    current: false,
    points: [
      'Edited wedding films, couple highlight videos, and customized song edits for clients.',
      'Managed end-to-end video production — footage selection, color correction, audio synchronization, and final delivery.',
      'Delivered high-quality cinematic output while meeting client expectations and deadlines.',
    ],
  },
  {
    role: 'Founder',
    company: 'G-Skill Recruiter India',
    location: 'Sonipat, Haryana',
    period: 'Jan 2023 — Sep 2023',
    current: false,
    points: [
      'Founded and managed a recruitment initiative connecting job seekers with hiring organizations.',
      'Built professional relationships with HR teams and coordinated candidate placements across various roles.',
    ],
  },
];

export const projects = [
  {
    title: 'LinkedIn Content Generator',
    stack: ['Python', 'LangGraph', 'LLMs', 'OpenAI'],
    language: 'Python',
    stars: '0',
    updated: 'Updated recently',
    repo: '',
    pinned: true,
    description:
      'An AI workflow that generates LinkedIn posts through iterative LangGraph routing and feedback refinement.',
    highlights: [
      'Built conditional steps to shape content from the prompt and style.',
      'Uses iterative passes to improve structure and tone.',
      'Designed for flexible, user-guided content generation.',
    ],
    accent: 'violet',
  },
  {
    title: 'AI Resume Evaluator',
    stack: ['Python', 'LangGraph', 'LLMs'],
    language: 'Python',
    stars: '0',
    updated: 'Updated recently',
    repo: '',
    pinned: true,
    description:
      'A resume review workflow that evaluates multiple aspects and combines the feedback into one structured output.',
    highlights: [
      'Runs parallel checks for clearer and faster feedback.',
      'Combines evaluation results into a single review flow.',
      'Helps identify weaknesses with less manual effort.',
    ],
    accent: 'cyan',
  },
  {
    title: 'Syllabix — AI Study Companion',
    stack: ['LangChain', 'Gemini API', 'FAISS', 'Streamlit'],
    language: 'Python',
    stars: '1',
    updated: 'Updated 4 days ago',
    repo: '',
    pinned: true,
    description:
      'A RAG application that helps students learn from uploaded books and notes through context-aware question answering.',
    highlights: [
      'Implemented document chunking, vector embeddings, semantic search, and retrieval using FAISS and the Gemini API.',
      'Generates answers grounded in uploaded study material, reducing hallucinations.',
      'Enables personalized learning from your own study material.',
    ],
    accent: 'violet',
  },
  {
    title: 'YouTube RAG Chatbot',
    stack: ['LangChain', 'Gemini', 'HuggingFace', 'Chroma'],
    language: 'Python',
    stars: '1',
    updated: 'Updated 3 weeks ago',
    repo: '',
    pinned: true,
    description:
      'A RAG-powered chatbot that lets you interact with YouTube videos by asking questions.',
    highlights: [
      'Built an end-to-end pipeline using transcript extraction, embeddings, vector search, and LLM response generation.',
      'Quickly retrieves key concepts and saves time while learning from educational video content.',
    ],
    accent: 'cyan',
  },
  {
    title: 'Company Policy RAG & Evaluation',
    stack: ['Python', 'LangChain', 'OpenAI', 'Gemini API', 'FAISS', 'RAGAS'],
    language: 'Python',
    stars: '0',
    updated: 'Updated last month',
    repo: 'https://github.com/Tanishk-exe/rag-evaluation-ragas/tree/main/CompanyPolicy_RAG_Assistant_with_evaluation',
    pinned: true,
    description:
      'A RAG assistant that answers employee queries from company policy documents with context-aware responses.',
    highlights: [
      'Implemented semantic retrieval over policy documents.',
      'Assessed RAG performance using RAGAS evaluation metrics.',
    ],
    accent: 'pink',
  },
  {
    title: 'IMDb Sentiment Analysis',
    stack: ['Python', 'NLP', 'TensorFlow', 'Scikit-learn'],
    language: 'Jupyter Notebook',
    stars: '1',
    updated: 'Updated on Jun 4',
    repo: 'https://github.com/Tanishk-exe/nlp-sentiment-analysis-projects',
    pinned: true,
    description:
      'A sentiment classification model trained on the IMDb dataset of 50,000+ movie reviews.',
    highlights: [
      'Applied text preprocessing, tokenization, sequence padding, and word embeddings.',
      'Classified reviews as positive or negative using deep learning NLP techniques.',
    ],
    accent: 'green',
  },
  {
    title: 'Next Word Predictor',
    stack: ['Python', 'TensorFlow', 'LSTM', 'NLP'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on Jun 4',
    repo: 'https://github.com/Tanishk-exe/next-word-prediction-lstm',
    pinned: true,
    description:
      'An NLP model using LSTM networks to predict the next word in a sentence.',
    highlights: [
      'Learned sequential patterns from text to generate context-aware predictions.',
      'Implemented text preprocessing, tokenization, sequence padding, and word embeddings.',
    ],
    accent: 'amber',
  },
  {
    title: '100 Days of Code',
    stack: ['Practice', 'Python', 'Projects'],
    language: 'Jupyter Notebook',
    stars: '1',
    updated: 'Updated on Jun 4',
    repo: 'https://github.com/Tanishk-exe/100-days-of-code',
    pinned: true,
    description: 'My 100 Days of Code journey with daily practice, notebooks, and small projects.',
    highlights: [
      'Collected daily coding exercises and notes in one place.',
      'Shows the consistency behind the portfolio projects.',
    ],
    accent: 'cyan',
  },
  {
    title: 'Email SMS Spam Classifier',
    stack: ['NLP', 'Machine Learning', 'Text Preprocessing'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on Jun 4',
    repo: '',
    pinned: false,
    description:
      'A text classification project that detects spam or ham messages using classical ML techniques.',
    highlights: [
      'Built a preprocessing pipeline for noisy email and SMS text.',
      'Trained a classifier to distinguish spam from legitimate messages.',
    ],
    accent: 'pink',
  },
  {
    title: 'MNIST Digit Classification CNN',
    stack: ['TensorFlow', 'CNN', 'MNIST'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on Mar 7',
    repo: '',
    pinned: false,
    description:
      'A convolutional neural network that classifies handwritten digits from the MNIST dataset.',
    highlights: [
      'Used convolutional layers to learn visual patterns in handwritten digits.',
      'Focused on image preprocessing and model evaluation.',
    ],
    accent: 'green',
  },
  {
    title: 'Dogs Vs Cats Image Classification CNN',
    stack: ['TensorFlow', 'CNN', 'Computer Vision'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on May 27',
    repo: '',
    pinned: false,
    description:
      'A deep learning image classifier for distinguishing dogs from cats.',
    highlights: [
      'Trained a CNN on labeled image data with augmentation.',
      'Compared prediction quality across validation and test splits.',
    ],
    accent: 'violet',
  },
  {
    title: 'Graduate Admission Prediction ANN',
    stack: ['ANN', 'Scikit-learn', 'Regression'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on Mar 7',
    repo: '',
    pinned: false,
    description:
      'An artificial neural network that predicts graduate admission chances from academic profile data.',
    highlights: [
      'Built a regression model using academic and test score features.',
      'Explored how preprocessing and feature scaling affect predictions.',
    ],
    accent: 'amber',
  },
  {
    title: 'ANN Credit Card Churn Prediction',
    stack: ['ANN', 'Classification', 'Fintech'],
    language: 'Jupyter Notebook',
    stars: '0',
    updated: 'Updated on Feb 27',
    repo: '',
    pinned: false,
    description:
      'A neural network model for predicting customer churn using financial customer data.',
    highlights: [
      'Built a churn prediction workflow with structured tabular data.',
      'Evaluated performance with standard classification metrics.',
    ],
    accent: 'cyan',
  },
];

export const skills = [
  {
    category: 'Generative AI & LLM Engineering',
    icon: 'sparkles',
    tone: 'violet',
    items: [
      'LLMs',
      'LangChain',
      'LangGraph',
      'RAG',
      'Advanced RAG',
      'CRAG',
      'Self-RAG',
      'Prompt Engineering',
      'Embeddings',
      'Vector Databases',
      'Semantic Search',
      'Structured Outputs',
      'Pydantic',
      'RAG Evaluation',
      'Ragas',
      'LLM Applications',
      'Fine-tuning',
    ],
  },
  {
    category: 'AI Agents & Systems',
    icon: 'layers',
    tone: 'cyan',
    items: [
      'AI Agents',
      'Agentic AI',
      'Agentic Workflows',
      'Tool Calling',
      'MCP',
      'Multi-Agent Systems',
      'LLM Observability',
      'LangSmith',
    ],
  },
  {
    category: 'Backend & Development',
    icon: 'code',
    tone: 'violet',
    items: [
      'FastAPI',
      'FastMCP',
      'REST APIs',
      'Streamlit',
      'Firebase',
      'API Integration',
      'Git',
      'GitHub',
    ],
  },
  {
    category: 'Databases & Vector Stores',
    icon: 'database',
    tone: 'amber',
    items: ['MongoDB', 'PostgreSQL', 'Chroma', 'FAISS'],
  },
  {
    category: 'Cloud & Deployment',
    icon: 'layers',
    tone: 'pink',
    items: ['Docker', 'AWS'],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'brain',
    tone: 'violet',
    items: [
      'Machine Learning',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Computer Vision',
    ],
  },
  {
    category: 'Deep Learning',
    icon: 'cpu',
    tone: 'pink',
    items: [
      'Deep Learning',
      'TensorFlow',
      'Keras',
      'ANN',
      'CNN',
      'LSTM',
      'Transformers',
      'Transfer Learning',
    ],
  },
  {
    category: 'Natural Language Processing',
    icon: 'message',
    tone: 'cyan',
    items: ['NLP', 'Sentiment Analysis', 'Text Preprocessing', 'Word Embeddings'],
  },
  {
    category: 'Programming Languages',
    icon: 'code',
    tone: 'cyan',
    items: ['Python', 'C', 'C++', 'Java'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'wrench',
    tone: 'amber',
    items: ['Jupyter Notebook', 'Google Colab', 'VS Code'],
  },
];

export const leadershipHighlights = [
  'Vice President — AI/ML Club: launched an AI/ML GVAC cohort, weekly classes and hands-on workshops',
  'Vice President — Student Council: coordinating events and boosting participation',
  'Organized HackSwitch, a 6-hour college hackathon',
  'Delivered AI Tools workshops — including one for an international (Nepal) delegation',
  'Conducted a Web Development workshop (HTML, CSS, JavaScript) for juniors',
];

export const gallery = {};
