import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import EditForm from './EditForm';

const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      servings
      totalTime
      category {
        id
        name
      }
      level {
        id
        name
      }
      ingridients {
        id
        name
        measurement {
          name
          id
        }
        quantity
      }
      method
      picture
      calories
      carbohydrates
      protein
      fat
    }
  }
`;

const EditRecipeWrapper = ({
  match: {
    params: { id },
  },
}) => (
  <Query query={GET_RECIPE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <EditForm recipe={data.recipe} />;
    }}
  </Query>
);

EditRecipeWrapper.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditRecipeWrapper;
