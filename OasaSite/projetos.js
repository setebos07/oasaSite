document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', function() {
      // Primeiro, esconda todos os conteúdos de projetos
      document.querySelectorAll('.project-content').forEach(content => {
          content.style.display = 'none';
      });
      
      // Depois, exiba o conteúdo relacionado ao projeto clicado
      const contentId = this.getAttribute('content-id');
      const targetContent = document.getElementById(contentId);
      targetContent.style.display = 'flex';
      
      // Aplica scroll apenas em dispositivos móveis (largura menor que 768px)
      if (window.innerWidth <= 768) {
          targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});
