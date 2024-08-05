import { RESUME_DATA } from './resumeData.js';

document.addEventListener('DOMContentLoaded', () => {
    // Header
    document.getElementById('profile-pic').src = RESUME_DATA.avatarUrl;
    document.getElementById('name').textContent = RESUME_DATA.name;
    document.getElementById('summary').textContent = RESUME_DATA.summary;
    document.getElementById('institution-link').textContent = RESUME_DATA.institution;
    document.getElementById('institution-link').href = RESUME_DATA.institutionLink;
    document.getElementById('location-link').textContent = RESUME_DATA.location;
    document.getElementById('location-link').href = RESUME_DATA.locationLink;

    // Social Links
    // In social links we are using font awesome icons, so we change the class
    const socialLinks = document.getElementById('social-links');
    RESUME_DATA.contact.social.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank'; // Open in a new tab

        // Create the icon-wrapper div
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';

        // Create the img element for the icon
        if (social.icon) {
            const img = document.createElement('img');
            img.src = `icons/${social.icon}`;
            img.alt = social.name;
            img.className = 'icon';
            iconWrapper.appendChild(img);
        }

        // Append the iconWrapper div to the link
        link.appendChild(iconWrapper);

        // Append the link to the socialLinks container
        socialLinks.appendChild(link);
    });

    // About
    document.getElementById('about').textContent = RESUME_DATA.about;

    // Education
    const education = document.getElementById('education');
    RESUME_DATA.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.classList.add('education-item');
        eduDiv.innerHTML = `
              <div class="card">
                <div class="card-info">                
                <h3>${edu.degree}</h3>
                <p>${edu.school}</p>
                <p>${edu.start}${edu.end ? ' - ' + edu.end : ' - Present'}</p>
                </div>
              </div>
          `;
        education.appendChild(eduDiv);
    });

    // Papers
    const papers = document.getElementById('papers');
    RESUME_DATA.papers.forEach(paper => {
        const formattedAuthors = paper.authors.map(author => 
            author === "João Bordalo" ? `<strong>${author}</strong>` : author
        ).join(', ');

        const paperDiv = document.createElement('div');
        paperDiv.classList.add('card');
        paperDiv.innerHTML = `
            <div class="card-info">
                <h3><a href="${paper.document}" target="_blank">${paper.title}</a></h3>
                <p>${formattedAuthors}</p>
                <p>${paper.date}${paper.conference ? ', ' + paper.conference : ''}</p>
            </div>
        `;

        // Create a container for the links/buttons
        const linksContainer = document.createElement('p');
        linksContainer.classList.add('paper-links');

        // Add each link as a button
        paper.links.forEach(linkObj => {
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('paper-link-button');

            const linkElement = document.createElement('a');
            linkElement.href = linkObj.link;
            linkElement.textContent = `[${linkObj.name}]`;

            linkDiv.appendChild(linkElement);
            linksContainer.appendChild(linkDiv);
        });

        paperDiv.appendChild(linksContainer);

        papers.appendChild(paperDiv);
    });

    // Work Experience
    const workExperience = document.getElementById('work-experience');
    RESUME_DATA.work.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('card');
        jobDiv.innerHTML = `
              <div class="card-info">
              <h3><a href="${job.link}" target="_blank">${job.title}</a></h3>
              <p><a href="${job.company_link}" target="_blank">${job.company}</a></p>
              <p>${job.start}${job.end ? ' - ' + job.end : ' - Present'}</p>
              <p class="card-summary">${job.description}</p>
              </div>  
              `;
        workExperience.appendChild(jobDiv);
    });

    // Awards
    const awards = document.getElementById('awards');
    RESUME_DATA.awards.forEach(award => {
        const awardDiv = document.createElement('div');
        awardDiv.classList.add('award-item');
        awardDiv.innerHTML = `
              <div class="card">
                <div class="card-info">            
                <h3><a href="${award.link}">${award.title}</a></h3>
                <p><a href="${award.awarderUrl}">${award.awarder}</a></p>
                <p>${award.date}</p>
                <p class="card-summary">${award.description}</p>
                </div>
              </div>
          `;
        awards.appendChild(awardDiv);
    });

    // Volunteering
    const volunteering = document.getElementById('volunteering');
    RESUME_DATA.volunteering.forEach(volunteer => {
        const volunteerDiv = document.createElement('div');
        volunteerDiv.classList.add('volunteer-item');
        volunteerDiv.innerHTML = `
            <div class="card">
                <div class="card-info">            
                    <h3><a href="${volunteer.certificateUrl}" target="_blank">${volunteer.title}</a></h3>
                    <p><a href="${volunteer.organizationUrl}" target="_blank">${volunteer.organization}</a></p>
                    <p>${volunteer.date}</p>
                    <p class="card-summary">${volunteer.description}</p>
                </div>
            </div>
        `;
        volunteering.appendChild(volunteerDiv);
    });
});
