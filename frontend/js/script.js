document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.querySelector('.nav-links');

    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Projects: SHOW/HIDE DETAILS toggle
    document.querySelectorAll('.details-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.target);
            const isHidden = target.hasAttribute('hidden');
            isHidden ? target.removeAttribute('hidden') : target.setAttribute('hidden', '');
            btn.textContent = isHidden ? 'HIDE DETAILS' : 'SHOW DETAILS';
        });
    });

    // Certifications: data + render
    const certifications = [
        { title: "AI Fluency: Framework & Foundations", desc: "Collaborate with AI systems effectively, efficiently, ethically, and safely.", date: "Aug 2026", link: "#" },
        { title: "Claude 101", desc: "Use Claude for everyday work tasks, understand core features, find paths to advanced topics.", date: "Aug 2026", link: "#" },
        { title: "Introduction to Claude Cowork", desc: "Work alongside Claude on real files: task loop, plugins, skills, file/research workflows.", date: "Aug 2026", link: "#" },
        { title: "AI Capabilities and Limitations", desc: "An introductory course about how AI works.", date: "Aug 2026", link: "#" },
        { title: "AI Fluency for Students", desc: "Develop AI Fluency skills that enhance learning, career planning, academic success.", date: "Aug 2026", link: "#" },
        { title: "AI Fluency for Small Businesses", desc: "Develop AI fluency to increase impact and efficiency while staying true to mission and values.", date: "Aug 2026", link: "#" },
        { title: "AI Fluency for Educators", desc: "For faculty, instructional designers, and leaders applying AI Fluency to teaching/strategy.", date: "Aug 2026", link: "#" },
        { title: "Teaching AI Fluency", desc: "Teach and assess AI Fluency in instructor-led settings.", date: "Aug 2026", link: "#" },
        { title: "AI Fluency for Nonprofits", desc: "Develop AI fluency to increase organizational impact while staying true to mission and values.", date: "Aug 2026", link: "#" },
        { title: "AI Fluency for Builders", desc: "Develop AI fluency to own the full arc from problem to shipped solution, with more impact.", date: "Aug 2026", link: "#" },
        { title: "Claude Code 101", desc: "Use Claude Code effectively in your daily development workflow.", date: "Aug 2026", link: "#" },
        { title: "Claude Code in Action", desc: "Integrate Claude Code into your development workflow.", date: "Aug 2026", link: "#" },
        { title: "Claude Platform 101", desc: "Build on the Claude Developer Platform from the ground up.", date: "Aug 2026", link: "#" },
        { title: "Building with the Claude API", desc: "The full spectrum of working with Anthropic models using the Claude API.", date: "Aug 2026", link: "#" },
        { title: "Introduction to Model Context Protocol", desc: "Build MCP servers/clients from scratch in Python to connect Claude to external services.", date: "Aug 2026", link: "#" },
        { title: "Model Context Protocol: Advanced Topics", desc: "Advanced MCP patterns: sampling, notifications, file access, transport for production.", date: "Aug 2026", link: "#" },
        { title: "Introduction to Agent Skills", desc: "Build, configure, and share Skills in Claude Code: reusable instructions.", date: "Aug 2026", link: "#" },
        { title: "Introduction to Subagents", desc: "Use and create sub-agents to manage context, delegate tasks, and build workflows.", date: "Aug 2026", link: "#" },
        { title: "Claude with Amazon Bedrock", desc: "First-of-its-kind AWS training: Anthropic models on Amazon Bedrock.", date: "Aug 2026", link: "#" },
        { title: "Claude with Google Cloud's Vertex AI", desc: "The full spectrum of working with Anthropic models through Google Cloud's Vertex AI.", date: "Aug 2026", link: "#" },
    ];

    const certGrid = document.getElementById('cert-grid');
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.innerHTML = `
            <p class="cert-title">${cert.title}</p>
            <p class="cert-desc">${cert.desc}</p>
            <div class="cert-footer">
                <span class="cert-date">${cert.date}</span>
                <a href="${cert.link}" class="cert-verify" target="_blank" rel="noopener">Verify ↗</a>
            </div>
        `;
        certGrid.appendChild(card);
    });

    // Axiomat AI widget
    const axiomatTrigger = document.getElementById('axiomatTrigger');
    const axiomatPanel = document.getElementById('axiomatPanel');
    const axiomatClose = document.getElementById('axiomatClose');
    const axiomatBody = document.getElementById('axiomatBody');
    const axiomatForm = document.getElementById('axiomatForm');
    const axiomatInput = document.getElementById('axiomatInput');

    axiomatTrigger.addEventListener('click', () => {
        axiomatPanel.hidden = !axiomatPanel.hidden;
    });

    axiomatClose.addEventListener('click', () => {
        axiomatPanel.hidden = true;
    });

    function addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = sender === 'user' ? 'axiomat-msg axiomat-msg-user' : 'axiomat-msg axiomat-msg-bot';
        msg.textContent = text;
        axiomatBody.appendChild(msg);
        axiomatBody.scrollTop = axiomatBody.scrollHeight;
    }

    async function sendMessage(text) {
        if (!text.trim()) return;
        addMessage(text, 'user');
        axiomatInput.value = '';
        axiomatInput.style.height = 'auto'; // reset the textarea height after sending

        try {
            const response = await fetch('http://127.0.0.1:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text }),
            });

            const data = await response.json();
            addMessage(data.reply, 'bot');
        } catch (error) {
            console.error('Axiomat AI request failed:', error);
            addMessage("Sorry, I'm having trouble connecting right now. Please try again.", 'bot');
        }
    }

    axiomatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage(axiomatInput.value);
    });

    axiomatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(axiomatInput.value);
        }
    });

    axiomatInput.addEventListener('input', () => {
        axiomatInput.style.height = 'auto';
        axiomatInput.style.height = Math.min(axiomatInput.scrollHeight, 130) + 'px';
    });

    document.querySelectorAll('.axiomat-prompt-btn').forEach(btn => {
        btn.addEventListener('click', () => sendMessage(btn.textContent));
    });

});

