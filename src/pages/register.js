//import './App.css';
//import Header from './components/Header';
import Title from './components/Title';
import TextInputWithLabels from './componenets/TextInputWithLabels';
import TextInputWithLabel from './components/TextInputWithLabel';
import CheckInButton from './CheckInButton';
import CheckoutButton from './components/CheckOutButton';
import CenteredText from './components/CenteredText';


const Register = () => {
  return (
    <div>
      <Header />
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

