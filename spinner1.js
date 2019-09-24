// spinner animation...glitchy still
setTimeout(() => {
  process.stdout.write('\r|   ');
  setTimeout(() => {
    process.stdout.write('\r/   ');
    setTimeout(() => {
        process.stdout.write('\r-   ');
        setTimeout(() => {
             process.stdout.write('\r\   ');
             setTimeout(() => {
              process.stdout.write('\r|   ');
              setTimeout(() => {
                process.stdout.write('\r-  ');
                setTimeout(() => {
                  process.stdout.write('\r\  ');
                  setTimeout(() => {
                    process.stdout.write('\r|   ');
                    setTimeout(() => {
                      process.stdout.write('\r|   ');
                      console.log('\n');
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
      }, 200);
  }, 200);
}, 200);


