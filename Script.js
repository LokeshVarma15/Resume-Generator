window.onload = function() {
    // Get the form elements
    const generateBtn = document.getElementById('generate-btn');
    const resumeOutput = document.getElementById('resume-output');

    // Generate the resume on button click
    generateBtn.addEventListener('click', function() {
        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;

        // Generate resume HTML
        const resumeHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
        `;

        // Display the resume
        resumeOutput.innerHTML = resumeHTML;
    });
};
