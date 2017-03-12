import apollo from 'components/apollo/wrapper';
import Main from './Component';

export default apollo([
  {
    gql: ``,
    props: ({ data }) => ({
      error: data.error && data.error.message,
      isLoading: data.loading,
    }),
  },
], Main);

