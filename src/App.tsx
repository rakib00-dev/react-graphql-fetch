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

  console.log(data.country.languages);

  return [data.country].map(
    ({ capital, name, description, native, emoji, currency, languages }) => {
      return (
        <div key={name}>
          <h1>{name}</h1>
          <h2>{capital}</h2>
          <p>{native}</p>
          <p>{emoji}</p>
          <p>{currency}</p>
          <b>About this location:</b>
          <p>{description}</p>
          <p>
            {'languages '}
            {languages.map((e: any) => (
              <>
                <span key={e.name}>{e.name}</span>
                <span key={e.code}>{e.code}</span>
              </>
            ))}
          </p>
          <br />
        </div>
      );
    }
  );
}

export default App;
