import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const DripForm = props => {
  if (requiredPropsAreUndefined(props)) {
    return null
  }

  const fieldAndTagNamesDictionary = props.formTags.reduce(function(
    result,
    field,
    index
  ) {
    result[props.formFields[index]] = field
    return result
  },
    {})

  const inputRow = (formField, formTag) => {
    let hyphenatedTag = formTag.split('_').join('-')

    return (
      <div className="drip-input">
        <label htmlFor={`drip-${hyphenatedTag}`} className="drip-form-label">{formField}</label>
        <input
          key={hyphenatedTag}
          id={`drip-${hyphenatedTag}`}
          name={`fields[${formTag}]`}
          data-test={formTag}
          type={inputType(formTag)}
          required
        />
      </div>
    )
  }

  const renderInputRows = () => {
    return Object.entries(fieldAndTagNamesDictionary).map(formField =>
      inputRow(formField[0], formField[1])
    )
  }

  const descriptionHtml = documentToHtmlString(
    JSON.parse(props.formDescription.formDescription)
  )

  const renderPrivacyPolicy = () => {
    return (
      <p data-test={'privacy-policy'} className="privacy-policy-text">
        Made Tech needs the contact information you provide to us to share news,
        blog posts and invitations to our events and webinars. You may
        unsubscribe from these communications at any time. Please review our{' '}
        <a href={'https://www.madetech.com/privacy'}>Privacy Policy</a> to find
        out more about how we take care of your personal data.
      </p>
    )
  }
  return (
    <div className={'contentful-drip-form'} data-test={'contentful-drip-form'}>
      <form
        action={`https://www.getdrip.com/forms/${props.dripFormId}/submissions`}
        method="post"
        data-drip-embedded-form={props.dripFormId}
      >
        <h3 data-drip-attribute="headline" data-test="headline">
          {props.headline}
        </h3>
        <div
          data-test="description"
          className="drip-form-text"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
        {renderInputRows()}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label for="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabindex="-1"
            autocomplete="false"
            value=""
          />
        </div>
        {renderPrivacyPolicy()}
        <div>
          <input
            type="submit"
            value="Subscribe"
            data-drip-attribute="sign-up-button"
            className="submit-button"
          />
        </div>
      </form>
    </div>
  )
}

const requiredPropsAreUndefined = props => {
  return (
    props.formDescription === undefined ||
    props.formFields === undefined ||
    props.formTags === undefined
  )
}

const inputType = formTag => {
  return formTag === 'email' ? 'email' : 'text'
}

export default DripForm
