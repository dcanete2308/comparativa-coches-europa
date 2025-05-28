document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        
        tabContents.forEach(tc => tc.classList.remove('active'));
  
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        const contentId = tab.getAttribute('aria-controls');
        document.getElementById(contentId).classList.add('active');
        
        document.getElementById(contentId).focus();
      });
    });
  
    function adaptTablesForMobile() {
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        if (window.innerWidth <= 480) {
          const headers = [];
          const thead = table.querySelector('thead');
          const tbody = table.querySelector('tbody');
          
          if (thead) {
            const headerCells = thead.querySelectorAll('th');
            headerCells.forEach(cell => {
              headers.push(cell.textContent.trim());
            });
            
            const rows = tbody.querySelectorAll('tr');
            rows.forEach(row => {
              const cells = row.querySelectorAll('td');
              cells.forEach((cell, index) => {
                if (headers[index]) {
                  cell.setAttribute('data-label', headers[index]);
                }
              });
            });
          }
        }
      });
    }
  
    adaptTablesForMobile();
    window.addEventListener('resize', adaptTablesForMobile);
  });