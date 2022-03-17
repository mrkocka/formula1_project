// Oldal menű javascriptben


const Linksnav = `
    <nav>
        <a class="nonebox" href="javascript:loadPage('0')">0</a>
        <a class="box" href="javascript:loadPage('1')">Bahreini Nagydíj</a>
        <a class="box" href="javascript:loadPage('2')">Szaudi Nagydíj</a>
        <a class="box" href="javascript:loadPage('3')">Ausztrál Nagydíj</a>
        <a class="box" href="javascript:loadPage('3')">4</a>
        <a class="box" href="javascript:loadPage('3')">5</a>
        <a class="box"href="javascript:loadPage('3')">6</a>
        <a class="box" href="javascript:loadPage('3')">7</a>
        <a class="box" href="javascript:loadPage('3')">8</a>
        <a class="box" href="javascript:loadPage('3')">9</a>
        <a class="box" href="javascript:loadPage('3')">10</a>
        <a class="box" href="javascript:loadPage('3')">11</a>
        <a class="box" href="javascript:loadPage('3')">12</a>
        <a class="box" href="javascript:loadPage('3')">13</a>
        <a class="box" href="javascript:loadPage('3')">14</a>
        <a class="box" href="javascript:loadPage('3')">15</a>
        <a class="box" href="javascript:loadPage('3')">16</a>
        <a class="box" href="javascript:loadPage('3')">17</a>
        <a class="box" href="javascript:loadPage('3')">18</a>
        <a class="box" href="javascript:loadPage('3')">19</a>
        <a class="box" href="javascript:loadPage('3')">20</a>
        

    
    </nav>

`;
document.querySelector( '.js-menu' ).innerHTML = Linksnav;

var pages ={
    '0':{
      template:'<h1>Kérlek Válasz Futamot!</h1><p>My first UI</p>'
    },
    '1':{
      template: '<h1>Bahreini Nagydíj</h1>'
    },
    '2':{
      template: '<h1>Szaudi Nagydíj</h1>'
    },
    '3':{
      template: '<h1>Ausztrál Nagydíj</h1>'
    }
      
      
    
  };


  const loadPage = ( pageIndex ) => {
    const { template } = pages[ pageIndex ];
    
    document.querySelector( '.js-content' ).innerHTML = template;
    
  }
  
  loadPage('0');