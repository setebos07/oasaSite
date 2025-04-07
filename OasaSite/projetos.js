document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
      // Primeiro, esconda todos os conteúdos de projetos
      document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
      });
      
      // Depois, exiba o conteúdo relacionado ao projeto clicado
      const contentId = this.getAttribute('content-id');
      document.getElementById(contentId).style.display = 'flex';
    });
  });