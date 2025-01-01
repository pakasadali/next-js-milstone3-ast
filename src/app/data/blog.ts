
type BlogDataType = {
    [key: string]: {
        id: string;
        title: string;
        description: string;
        image: string;
        content: string;
    }[];
};

export const Blog_Data:BlogDataType = {
    "Technology": [
    {
        "id": "1",
        "title": "Quantum Computing",
        "description": "An exploration of Quantum Computing and its potential.",
        "image": "/QC.jpg",
        "content": "Quantum computing leverages the principles of quantum mechanics to process information in fundamentally new ways. Unlike classical computers, which use bits as units of data, quantum computers use quantum bits, or qubits, enabling unprecedented computational power for tasks like cryptography, optimization, and complex simulations."
    },
    {
        "id": "1.2",
        "title": "Blockchain Technology",
        "description": "Discover the basics and applications of Blockchain.",
        "image": "/Blockchain.jpg",
        "content": "Blockchain is a decentralized digital ledger that records transactions across multiple computers securely. Known primarily for powering cryptocurrencies like Bitcoin, blockchain has broader applications, including supply chain management, voting systems, and secure data sharing, transforming industries with its transparency and security."
    }
],
"Sports": [
    {
        "id": "2",
        "title": "Basketball",
        "description": "A Blog about the dynamic game of Basketball.",
        "image": "/Baskiball.jpg",
        "content": "Basketball is a fast-paced sport played by two teams of five players each, aiming to score points by shooting a ball through the opposing team’s hoop. Originating in 1891, it has grown into a global phenomenon, celebrated for its athleticism, teamwork, and iconic players."
    },
    
    
],
"Food": [
    
        
    {
        "id": "3.2",
        "title": "Mexican Cuisine",
        "description": "A flavorful journey into Mexican food.",
        "image": "/Maxician.jpg",
        "content": "Mexican cuisine is a vibrant fusion of indigenous and Spanish influences, featuring bold flavors, colorful presentations, and iconic dishes like tacos, enchiladas, and guacamole. Known for its use of fresh ingredients, spices, and love for celebration, Mexican food delights the senses."
    }
],
"Medical": [
    {
        "id": "4",
        "title": "Mental Health Awareness",
        "description": "Exploring the importance of mental well-being.",
        "image": "/medical.jpg",
        "content": "Mental health is a crucial aspect of overall well-being, encompassing emotional, psychological, and social factors. Awareness and open conversations about mental health can help reduce stigma, promote understanding, and encourage individuals to seek support when needed."
    },
    
]

}