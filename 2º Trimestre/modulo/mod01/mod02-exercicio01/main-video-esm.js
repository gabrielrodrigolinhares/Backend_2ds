
import { alugarFilme, devolverFilme } from './video-esm.js';


const registroAluguel = alugarFilme('Suzume', '03/06/2026', 12.90);
console.log(registroAluguel);

const registroDevolucao = devolverFilme('Suzume', '06/06/2026');
console.log(registroDevolucao);

