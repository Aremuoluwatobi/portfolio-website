projects = [
    {
        "id": "myscholar-ai",
        "title": "MyScholar AI",
        "description": (

            "An academic RAG (Retrieval-Augmented Generation) system that lets students and "
            "researchers query large academic documents in natural language instead of manually "
            "searching through them. Solves the problem of feeding entire documents to an LLM being "
            "inefficient and unreliable, and the problem of keyword search missing semantically related "
            "content phrased differently. Pipeline: documents are text-extracted with pdfplumber and "
            "python-docx, split into chunks with RecursiveCharacterTextSplitter, converted into embeddings "
            "with Sentence Transformers (all-MiniLM-L6-v2), and stored in ChromaDB. On a query, ChromaDB "
            "retrieves the most semantically relevant chunks, which are passed as context to Llama 3.1 "
            "via Groq to generate the final answer."
        ),

        "tech": [
            "Python", "RAG", "ChromaDB", "Sentence Transformers", "Groq API",
            "Hugging Face Spaces", "FastAPI", "LangChain Text Splitters", "pdfplumber",
            "Docker"

        ],
        "github": "https://github.com/Aremuoluwatobi/rag-pipeline",
        "highlight": "Deployed RAG pipeline · Real users on Hugging Face Spaces",
    },
    {
        "id": "inventory-management-system",
        "title": "Inventory Management System",
        "description": (
            "First backend project, built to learn server-side architecture and "
            "authentication in Python. No frontend, the focus was entirely on getting "
            "the backend logic, data handling, and auth flow right."
        ),
        "tech": ["Python", "Authentication", "Backend"],
        "github": "https://github.com/Aremuoluwatobi/inventory-api",
        "highlight": "First project · Backend architecture & authentication",
    },
]
