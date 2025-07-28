#!/usr/bin/env node

/**
 * The Knowledge Cartographer - Agent Mode + MCP Adventure
 * 
 * This application reads and analyzes knowledge data that was already created
 * by GitHub Copilot Agent Mode using MCP tools (FireCrawl + File System).
 * 
 * The MCP tools have already:
 * - Scraped web content using FireCrawl MCP
 * - Organized the data into structured files using File System MCP
 * 
 * This application provides:
 * - Knowledge graph analysis of the existing data
 * - Interactive exploration of the knowledge base
 * - Relationship discovery and visualization
 */

const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

class KnowledgeCartographer {
    constructor() {
        this.knowledgeBase = new Map();
        this.currentTopic = null;
        this.baseDir = './akashic-archives';
    }

    displayWelcome() {
        console.log(`
🗺️  Welcome to the Knowledge Cartographer! 🗺️

You are exploring the Akashic Archives - a mystical knowledge base
that has been discovered and organized by the MCP spirits of the web.

The FireCrawl spirits have gathered knowledge from across the digital realm,
while the File System spirits have organized it into sacred scrolls.

Your task: Navigate this treasure trove of interconnected wisdom.

🔮 Initializing archive exploration systems...
        `);
    }

    async checkArchiveStatus() {
        try {
            const stats = await fs.stat(this.baseDir);
            if (stats.isDirectory()) {
                console.log(`✅ Akashic Archives detected at: ${this.baseDir}`);

                // Check what topics are available
                const topics = await this.getAvailableTopics();
                if (topics.length > 0) {
                    console.log(`📚 Available knowledge domains: ${topics.length} topics discovered`);
                    console.log(`🌟 Archives ready for exploration!\n`);
                    return true;
                } else {
                    console.log(`📭 Archives exist but no topics found`);
                    return false;
                }
            }
        } catch (error) {
            console.log(`❌ No Akashic Archives found`);
            console.log(`🤖 In real usage, GitHub Copilot Agent Mode would have:`);
            console.log(`   1. Used FireCrawl MCP to scrape web content about your topics`);
            console.log(`   2. Used File System MCP to organize the data into ${this.baseDir}/`);
            console.log(`   3. Created structured knowledge files for you to explore`);
            console.log(`\n💡 For this demo, let's create some sample data to explore...`);

            await this.createSampleArchive();
            return true;
        }
    }

    async createSampleArchive() {
        console.log(`🎭 Creating sample Akashic Archives (simulating MCP output)...`);

        // Create the directory structure that MCP tools would have created
        await fs.mkdir(this.baseDir, { recursive: true });
        await fs.mkdir(path.join(this.baseDir, 'topics'), { recursive: true });
        await fs.mkdir(path.join(this.baseDir, 'indexes'), { recursive: true });

        // Sample data that represents what FireCrawl + File System MCP would create
        const sampleTopics = {
            'quantum-computing': {
                entities: {
                    'quantum bit': { frequency: 3, sources: ['mit-intro', 'quantum-basics'], concepts: ['quantum mechanics', 'computation'] },
                    'superposition': { frequency: 2, sources: ['mit-intro'], concepts: ['quantum mechanics'] },
                    'entanglement': { frequency: 2, sources: ['mit-intro', 'quantum-theory'], concepts: ['quantum mechanics'] },
                    'quantum gate': { frequency: 1, sources: ['quantum-circuits'], concepts: ['computation', 'quantum mechanics'] },
                    "Shor's algorithm": { frequency: 2, sources: ['cryptography-paper'], concepts: ['cryptography', 'algorithms'] }
                },
                relationships: {
                    'quantum bit <-> superposition': { strength: 3, type: 'enables' },
                    'quantum bit <-> entanglement': { strength: 2, type: 'enables' },
                    'superposition <-> quantum gate': { strength: 2, type: 'implements' },
                    "quantum computing <-> Shor's algorithm": { strength: 3, type: 'includes' }
                },
                sources: {
                    'mit-intro': { url: 'https://mit.edu/quantum-intro', title: 'MIT Quantum Computing Introduction', size: '4.2KB' },
                    'quantum-basics': { url: 'https://quantum-basics.org', title: 'Quantum Computing Fundamentals', size: '3.1KB' },
                    'cryptography-paper': { url: 'https://crypto-journal.com/shor', title: "Shor's Algorithm in Practice", size: '5.8KB' }
                },
                metadata: { totalEntities: 5, totalRelationships: 4, totalSources: 3, created: new Date().toISOString() }
            },
            'artificial-intelligence': {
                entities: {
                    'neural networks': { frequency: 4, sources: ['ai-intro', 'deep-learning'], concepts: ['machine learning', 'pattern recognition'] },
                    'deep learning': { frequency: 3, sources: ['ai-intro', 'deep-learning'], concepts: ['machine learning'] },
                    'gradient descent': { frequency: 2, sources: ['optimization'], concepts: ['optimization', 'algorithms'] },
                    'transformer architecture': { frequency: 2, sources: ['nlp-paper'], concepts: ['attention', 'language models'] },
                    'ethical AI': { frequency: 1, sources: ['ethics-guide'], concepts: ['ethics', 'governance'] }
                },
                relationships: {
                    'neural networks <-> deep learning': { strength: 4, type: 'subset' },
                    'deep learning <-> gradient descent': { strength: 3, type: 'uses' },
                    'transformer architecture <-> attention': { strength: 3, type: 'implements' },
                    'AI <-> ethical AI': { strength: 2, type: 'requires' }
                },
                sources: {
                    'ai-intro': { url: 'https://ai-course.stanford.edu', title: 'Introduction to AI', size: '6.4KB' },
                    'deep-learning': { url: 'https://deeplearning.ai/fundamentals', title: 'Deep Learning Fundamentals', size: '8.2KB' },
                    'nlp-paper': { url: 'https://arxiv.org/transformer-paper', title: 'Attention Is All You Need', size: '12.1KB' }
                },
                metadata: { totalEntities: 5, totalRelationships: 4, totalSources: 3, created: new Date().toISOString() }
            }
        };

        // Save the data that MCP tools would have created
        for (const [topicName, topicData] of Object.entries(sampleTopics)) {
            const topicDir = path.join(this.baseDir, 'topics', topicName);
            await fs.mkdir(topicDir, { recursive: true });

            await fs.writeFile(
                path.join(topicDir, 'entities.json'),
                JSON.stringify(topicData.entities, null, 2)
            );

            await fs.writeFile(
                path.join(topicDir, 'relationships.json'),
                JSON.stringify(topicData.relationships, null, 2)
            );

            await fs.writeFile(
                path.join(topicDir, 'sources.json'),
                JSON.stringify(topicData.sources, null, 2)
            );

            await fs.writeFile(
                path.join(this.baseDir, 'indexes', `${topicName}-index.json`),
                JSON.stringify(topicData.metadata, null, 2)
            );
        }

        console.log(`✨ Sample Akashic Archives created!`);
        console.log(`📚 Topics available: quantum-computing, artificial-intelligence`);
    }

    async getAvailableTopics() {
        try {
            const indexesPath = path.join(this.baseDir, 'indexes');
            const files = await fs.readdir(indexesPath);
            return files
                .filter(file => file.endsWith('-index.json'))
                .map(file => file.replace('-index.json', ''));
        } catch (error) {
            return [];
        }
    }

    async loadTopic(topicName) {
        const topicDir = path.join(this.baseDir, 'topics', topicName);

        try {
            console.log(`📖 Loading knowledge domain: ${topicName}`);

            // Read the files that MCP tools created
            const [entitiesData, relationshipsData, sourcesData, indexData] = await Promise.all([
                fs.readFile(path.join(topicDir, 'entities.json'), 'utf8').then(JSON.parse),
                fs.readFile(path.join(topicDir, 'relationships.json'), 'utf8').then(JSON.parse),
                fs.readFile(path.join(topicDir, 'sources.json'), 'utf8').then(JSON.parse),
                fs.readFile(path.join(this.baseDir, 'indexes', `${topicName}-index.json`), 'utf8').then(JSON.parse)
            ]);

            this.currentTopic = {
                name: topicName,
                entities: entitiesData,
                relationships: relationshipsData,
                sources: sourcesData,
                metadata: indexData
            };

            console.log(`✅ Loaded ${Object.keys(entitiesData).length} entities`);
            console.log(`✅ Loaded ${Object.keys(relationshipsData).length} relationships`);
            console.log(`✅ Loaded ${Object.keys(sourcesData).length} sources`);
            console.log(`🔮 Knowledge domain ready for exploration!\n`);

            return this.currentTopic;

        } catch (error) {
            console.error(`❌ Failed to load topic '${topicName}': ${error.message}`);
            return null;
        }
    }

    displayTopicOverview() {
        if (!this.currentTopic) {
            console.log(`❌ No topic loaded. Use 'load <topic>' first.`);
            return;
        }

        const { name, entities, relationships, sources, metadata } = this.currentTopic;

        console.log(`🌟 Knowledge Domain: ${name.replace('-', ' ').toUpperCase()}`);
        console.log(`📊 Overview:`);
        console.log(`   • Entities: ${Object.keys(entities).length}`);
        console.log(`   • Relationships: ${Object.keys(relationships).length}`);
        console.log(`   • Sources: ${Object.keys(sources).length}`);
        console.log(`   • Created: ${new Date(metadata.created).toLocaleDateString()}`);
        console.log();

        console.log(`🔍 Top Entities by Frequency:`);
        const sortedEntities = Object.entries(entities)
            .sort((a, b) => b[1].frequency - a[1].frequency)
            .slice(0, 5);

        sortedEntities.forEach(([entity, data], index) => {
            const prefix = index === sortedEntities.length - 1 ? '└──' : '├──';
            console.log(`   ${prefix} ${entity} (appears ${data.frequency} times)`);
            if (data.concepts && data.concepts.length > 0) {
                const conceptPrefix = index === sortedEntities.length - 1 ? '    ' : '│   ';
                console.log(`   ${conceptPrefix}└── concepts: ${data.concepts.slice(0, 2).join(', ')}`);
            }
        });
        console.log();
    }

    findEntityConnections(entityName) {
        if (!this.currentTopic) {
            console.log(`❌ No topic loaded. Use 'load <topic>' first.`);
            return;
        }

        const { entities, relationships } = this.currentTopic;

        if (!entities[entityName]) {
            console.log(`❌ Entity '${entityName}' not found in current topic.`);
            console.log(`💡 Available entities: ${Object.keys(entities).slice(0, 5).join(', ')}...`);
            return;
        }

        console.log(`🔗 Connections for "${entityName}":`);

        // Find direct relationships
        const connections = [];
        Object.entries(relationships).forEach(([relationshipKey, relationshipData]) => {
            if (relationshipKey.includes(entityName)) {
                const parts = relationshipKey.split(' <-> ');
                const other = parts.find(part => part !== entityName);
                if (other) {
                    connections.push({
                        target: other,
                        type: relationshipData.type,
                        strength: relationshipData.strength
                    });
                }
            }
        });

        if (connections.length > 0) {
            connections
                .sort((a, b) => b.strength - a.strength)
                .forEach((conn, index) => {
                    const prefix = index === connections.length - 1 ? '└──' : '├──';
                    console.log(`   ${prefix} ${conn.target} (${conn.type}, strength: ${conn.strength})`);
                });
        } else {
            console.log(`   └── No direct connections found`);
        }

        // Show concepts
        const entityData = entities[entityName];
        if (entityData.concepts && entityData.concepts.length > 0) {
            console.log(`\n🏷️  Related concepts: ${entityData.concepts.join(', ')}`);
        }

        // Show sources
        if (entityData.sources && entityData.sources.length > 0) {
            console.log(`📚 Found in sources: ${entityData.sources.join(', ')}`);
        }

        console.log();
    }

    async exploreRelationships() {
        if (!this.currentTopic) {
            console.log(`❌ No topic loaded. Use 'load <topic>' first.`);
            return;
        }

        const { relationships } = this.currentTopic;

        console.log(`🕸️  Knowledge Graph Relationships:`);
        console.log(`   Found ${Object.keys(relationships).length} connections\n`);

        const sortedRelationships = Object.entries(relationships)
            .sort((a, b) => b[1].strength - a[1].strength)
            .slice(0, 8);

        sortedRelationships.forEach(([relationshipKey, data], index) => {
            const prefix = index === sortedRelationships.length - 1 ? '└──' : '├──';
            console.log(`   ${prefix} ${relationshipKey}`);

            const nextPrefix = index === sortedRelationships.length - 1 ? '    ' : '│   ';
            console.log(`   ${nextPrefix}└── ${data.type} (strength: ${data.strength})`);
        });
        console.log();
    }

    async showSources() {
        if (!this.currentTopic) {
            console.log(`❌ No topic loaded. Use 'load <topic>' first.`);
            return;
        }

        const { sources } = this.currentTopic;

        console.log(`📚 Knowledge Sources (discovered by FireCrawl MCP):`);
        console.log();

        Object.entries(sources).forEach(([sourceId, sourceData], index) => {
            const prefix = index === Object.keys(sources).length - 1 ? '└──' : '├──';
            console.log(`   ${prefix} ${sourceData.title}`);

            const nextPrefix = index === Object.keys(sources).length - 1 ? '    ' : '│   ';
            console.log(`   ${nextPrefix}├── URL: ${sourceData.url}`);
            console.log(`   ${nextPrefix}└── Size: ${sourceData.size}`);
        });
        console.log();
    }

    async interactiveMode() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(`🎮 Entering interactive exploration mode...`);
        console.log(`Type 'help' for available commands, 'exit' to quit.\n`);

        const prompt = () => {
            rl.question('> ', async (input) => {
                const [command, ...args] = input.trim().split(' ');

                switch (command.toLowerCase()) {
                    case 'help':
                        this.showHelp();
                        break;
                    case 'list':
                        await this.listTopics();
                        break;
                    case 'load':
                        if (args.length > 0) {
                            await this.loadTopic(args.join('-').toLowerCase());
                        } else {
                            console.log('Usage: load <topic>');
                        }
                        break;
                    case 'overview':
                        this.displayTopicOverview();
                        break;
                    case 'find':
                        if (args.length > 0) {
                            this.findEntityConnections(args.join(' '));
                        } else {
                            console.log('Usage: find <entity name>');
                        }
                        break;
                    case 'relationships':
                    case 'graph':
                        await this.exploreRelationships();
                        break;
                    case 'sources':
                        await this.showSources();
                        break;
                    case 'entities':
                        this.listEntities();
                        break;
                    case 'exit':
                        console.log('🗺️ Happy knowledge exploration! The archives await your return! 🗺️');
                        rl.close();
                        return;
                    default:
                        console.log(`Unknown command: ${command}. Type 'help' for available commands.`);
                }

                prompt();
            });
        };

        prompt();
    }

    showHelp() {
        console.log(`
🧭 Available Commands:

📚 Archive Management:
• list                    - Show all available knowledge domains
• load <topic>           - Load a specific knowledge domain

🔍 Exploration:
• overview               - Show current topic overview
• entities               - List all entities in current topic
• find <entity>          - Find connections for a specific entity
• relationships          - Explore knowledge graph relationships
• sources                - Show original source materials

🎮 System:
• help                   - Show this help message
• exit                   - Exit the Knowledge Cartographer

Examples:
> load quantum computing
> overview
> find "quantum bit"
> relationships
        `);
    }

    async listTopics() {
        const topics = await this.getAvailableTopics();

        if (topics.length === 0) {
            console.log('📭 No knowledge domains found in the archives.');
            return;
        }

        console.log('📚 Available Knowledge Domains:');
        topics.forEach((topic, index) => {
            const prefix = index === topics.length - 1 ? '└──' : '├──';
            console.log(`   ${prefix} ${topic.replace('-', ' ')}`);
        });
        console.log();
    }

    listEntities() {
        if (!this.currentTopic) {
            console.log(`❌ No topic loaded. Use 'load <topic>' first.`);
            return;
        }

        const { entities } = this.currentTopic;

        console.log(`🏷️  Entities in ${this.currentTopic.name}:`);

        const sortedEntities = Object.entries(entities)
            .sort((a, b) => b[1].frequency - a[1].frequency);

        sortedEntities.forEach(([entity, data], index) => {
            const prefix = index === sortedEntities.length - 1 ? '└──' : '├──';
            console.log(`   ${prefix} ${entity} (frequency: ${data.frequency})`);
        });
        console.log();
    }
}

// Main execution
async function main() {
    const cartographer = new KnowledgeCartographer();

    cartographer.displayWelcome();

    const archivesReady = await cartographer.checkArchiveStatus();

    if (!archivesReady) {
        console.log('❌ Cannot proceed without knowledge archives.');
        return;
    }

    if (process.argv.includes('--interactive') || process.argv.includes('-i')) {
        await cartographer.interactiveMode();
    } else {
        // Auto-load and explore a topic if specified
        const topicArg = process.argv[2];
        if (topicArg) {
            const topic = topicArg.toLowerCase().replace(/\s+/g, '-');
            const loaded = await cartographer.loadTopic(topic);
            if (loaded) {
                cartographer.displayTopicOverview();
            }
        } else {
            console.log(`💡 Try these commands:`);
            console.log(`• node The-Knowledge-Cartographer-Agent-MCP.js "quantum computing"`);
            console.log(`• node The-Knowledge-Cartographer-Agent-MCP.js --interactive`);
        }
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🗺️ Knowledge Cartographer shutting down gracefully...');
    process.exit(0);
});

if (require.main === module) {
    main().catch(console.error);
}

module.exports = KnowledgeCartographer;