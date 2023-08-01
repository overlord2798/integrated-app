//import './App.css';
//import Header from './components/Header';
import Title from './Title';
import TextInputWithLabels from './TextInputWithLabels';
import TextInputWithLabel from './TextInputWithLabel';
import CheckInButton from './CheckInButton';
import CheckoutButton from './CheckOutButton';
import CenteredText from './CenteredText';


const Register = () => {
  return (
    <div>
      
      <Title />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CenteredText text="Item 1" />
        <TextInputWithLabels label="Capacity" />
        <TextInputWithLabels label="Availability" />
        <TextInputWithLabels label="Request" />

      </div>
   
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CenteredText text="Item 2" />
        <TextInputWithLabels label="Capacity" />
        <TextInputWithLabels label="Availability" />
        <TextInputWithLabels label="Request" />
      </div>
      <CheckInButton />
      <CheckoutButton />
      
      
      
    </div>
      

  );
}

export default Register;

