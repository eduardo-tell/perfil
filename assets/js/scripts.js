function traduz(lingua){
    removeAtivo();
    if(lingua == 'pt'){
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resumso</h2><p>Atuo na área de desenvolvimento web a mais de 6 anos, com experiência sólida nas principais tecnologias de desenvolvimento Front-End, hoje atuo na empresa DOT Digital Group como Web Developer Sênior.</p><p>Atualmente estou cursando graduação no último ano em Sistemas de Informação e também varios outros cursos técnicos na área.</p>`;                  
      itemParaAtivar = 1;
    } else if(lingua == 'es') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resumen</h2><p>He estado trabajando en el área de desarrollo web durante más de 6 años, con una sólida experiencia en las principales tecnologías de desarrollo de front end, hoy trabajo en DOT Digital Group como Desarrollador Web Senior.</p><p>Actualmente estoy estudiando pregrado en el último año en Sistemas de información y también en varios otros cursos técnicos en el área.</p>`;
      itemParaAtivar = 3;
    } else if(lingua == 'en') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Resume</h2><p>I have been working in the web development area for over 6 years, with solid experience in the main Front End development technologies, today I work at DOT Digital Group as Senior Web Developer.</p><p>I am currently studying undergraduate in the last year in Information Systems and also several other technical courses in the area.</p>`;
      itemParaAtivar = 5;
    }else if (lingua == 'it') {
      document.getElementsByClassName("descricao")[0].innerHTML = `<h2>Sommario</h2><p>Lavoro nell'area dello sviluppo web da oltre 6 anni, con una solida esperienza nelle principali tecnologie di sviluppo del front-end, oggi lavoro presso DOT Digital Group come Senior Web Developer.</p><p>Attualmente sto studiando negli ultimi anni in Sistemi Informatici e anche in altri corsi tecnici nell'area.</p>`;
      itemParaAtivar = 7;
    }        
    document.getElementsByClassName("linguas")[0].childNodes[itemParaAtivar].className = 'ativo';  
}

function removeAtivo(){
    document.getElementsByClassName("ativo")[0].className = '';        
}