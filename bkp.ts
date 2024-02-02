//testes


// export const favoritarProduto = (produto) => ({
//   type: 'FAVORITAR_PRODUTO',
//   payload: produto,
// });

// export const desfavoritarProduto = (produto) => ({
//   type: 'DESFAVORITAR_PRODUTO',
//   payload: produto,
// });

// const initialState = {
//   favoritos: [],
// };

// const favoritosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FAVORITAR_PRODUTO':
//       if (state.favoritos.find((p) => p.id === action.payload.id)) {
//         return state;
//       }
//       return { ...state, favoritos: [...state.favoritos, action.payload] };
//     case 'DESFAVORITAR_PRODUTO':
//       const favoritosSemProduto = state.favoritos.filter(
//         (p) => p.id !== action.payload.id
//       );
//       return { ...state, favoritos: favoritosSemProduto };
//     default:
//       return state;
//   }
// };

// export default favoritosReducer;


// import { useDispatch } from 'react-redux';
// import { favoritarProduto, desfavoritarProduto } from './actions';

// function Produto({ produto }) {
//   const dispatch = useDispatch();

//   const favoritar = () => {
//     dispatch(favoritarProduto(produto));
//   };

//   const desfavoritar = () => {
//     dispatch(desfavoritarProduto(produto));
//   };

//   return (
//     <div>
//       <h2>{produto.nome}</h2>
//       <button onClick={favoritar}>Favoritar</button>
//       <button onClick={desfavoritar}>Desfavoritar</button>
//     </div>
//   );
// }


// import { connect } from 'react-redux';
// import Produto from './Produto';
// import { type } from 'os';

// const mapStateToProps = (state) => ({
//   favoritos: state.favoritos,
// });

// const mapDispatchToProps = {
//   favoritarProduto,
//   desfavoritarProduto,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Produto);

