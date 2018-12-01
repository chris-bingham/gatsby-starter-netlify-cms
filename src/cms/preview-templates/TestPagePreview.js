import React from 'react'
import PropTypes from 'prop-types'
import { TestPageTemplate } from '../../templates/test-page'

const TestPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <p>nein</p> 
  )
}

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TestPagePreview
