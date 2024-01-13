fetch('../assets/json/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const headerLogo = document.getElementById('headerLogo');
        const footerContainer = document.getElementById('footerContainer');
        const projectsContainer = document.getElementById('projects-container');

        //contenedor del header
            headerLogo.textContent = data.navHeader.logo;

        //contenedor del footer
        data.dataFooter.forEach(footer => {
            const div = document.createElement('div');
            const tittle = document.createElement('h3');
            const text = document.createElement('p');

            tittle.textContent = footer.dataName;
            text.textContent = footer.dataText;
            
            div.appendChild(tittle);
            div.appendChild(text);
            footerContainer.appendChild(div);
        })

        //contenedor de los proyectos
        data.proyects.forEach(project => {
            const link = document.createElement('a');
            const img = document.createElement('img');

            link.href = project.siteUrl;
            link.setAttribute('target', '_blank')
            img.src = project.imgUrl;
            img.setAttribute('alt', 'Images proyect');

            link.appendChild(img);
            projectsContainer.appendChild(link);
        })
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });