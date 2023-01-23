import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service... 
      //maybe if you have a logger in the backend that stores errors
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (

        <div class='flex align-middle flex-col justify-center text-center font-bold mt-10 '>
        <h1>It's Not you, It's Us</h1>
        <h1>Please Go Back to the homepage and trying again, if the issue presists. Contact customer support</h1>
        </div>

        )
        
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;