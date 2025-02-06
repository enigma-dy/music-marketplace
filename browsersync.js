import browserSync from 'browser-sync';
import { exec } from 'child_process';

const bs = browserSync.create();

// Start Vite and BrowserSync
exec('vite', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting Vite: ${err.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});

bs.init({
  proxy: 'http://localhost:5173', // Vite's default dev server port
  files: ['src/**/*'], // Watch for changes in your project files
  open: false, // Prevent automatic browser opening
  notify: false, // Disable BrowserSync notifications
});
