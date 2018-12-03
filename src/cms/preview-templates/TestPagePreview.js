import React from 'react'
import PropTypes from 'prop-types'
import { TestPageTemplate } from '../../templates/test-page'

const TestPagePreview = ({ entry, getAsset }) => {

  return (
    <TestPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
    />
  )
}

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TestPagePreview
