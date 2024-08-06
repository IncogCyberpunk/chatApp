import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    port: 3000,
    // proxy to disable the CORS error (we will face this error only in development )
    proxy:{
      // this means that /api is automatically prefixed with the target value i.e. http://localhost:5000
      "/api":{
        target: "http://localhost:5000"
      }
    }
  }
})
