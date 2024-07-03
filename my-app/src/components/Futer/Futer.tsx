import React, { useState } from 'react';
// import axios from 'axios';
import './Futer.css';

export const Futer: React.FC = () => {
//     const [name, setName] = useState<string>('');
//     const [number, setNumber] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<boolean>(false);

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccess(false);
    
//         try {
//          const response = await axios.post('/api/send-message', { name, number });
//           setSuccess(true);
//           console.log('Response:', response.data);
//         } catch (err) {
//           setError('Failed to send message');
//           console.error('Error:', err);
//         } finally {
//           setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="number">Number:</label>
//             <input
//               type="text"
//               id="number"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Sending...' : 'Send'}
//           </button>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
//         </form>
//       );
//     };

    return(
        <div className="conteiner">
            <div className="forma">Отправь форму</div>
            <div className="inputs1">
                <input className="name" type="text" placeholder="Имя"/>
                <input className="phone" type="number" pattern="[0-9]*" placeholder="Телефон"/>
            </div>
            <div className="inputs2">
                <input className="chec" type='checkbox'/>
                <div className="oke">Согласен, отказываюсь</div>  
                <button className="btn10">Отправить</button>
            </div> 
        </div>
    );
}
export default Futer;