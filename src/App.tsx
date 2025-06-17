import { gql, useQuery } from '@apollo/client';

const GET_LOCATIONS = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

// interface dataType {
//   capital: string;
//   name: string;
//   description: string;
//   photo: string;
// }

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // console.log(data.country.languages);

  return [data.country].map(
    ({ capital, name, native, emoji, currency, languages }) => {
      return (
        <div key={name}>
          <h1>name: {name}</h1>
          <h2>capital: {capital}</h2>
          <p>native: {native}</p>
          <p>emoji: {emoji}</p>
          <p>currency: {currency}</p>
          <p>
            {'languages '}
            {languages.map((e: any) => (
              <span key={e.code}>
                <span>{e.name}</span>
                <br />
                <span>{e.code}</span>
              </span>
            ))}
          </p>
          <br />
        </div>
      );
    }
  );
}

export default App;
