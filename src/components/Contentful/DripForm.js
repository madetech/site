import React from 'react'

const DripForm = props => {
  let fieldAndTagNamesDictionary = props.formTags.reduce(function(
    result,
    field,
    index
  ) {
    result[props.formFields[index]] = field
    return result
  },
  {})

  let inputRow = (formField, formTag) => {
    let hyphenatedTag = formTag.split('_').join('-')
    return (
      <div className="drip-input">
        <label htmlFor={`drip-${hyphenatedTag}`}>{formField}</label>
        <input
          key={hyphenatedTag}
          id={`drip-${hyphenatedTag}`}
          name={`fields[${formTag}]`}
          data-test={formTag}
        />
      </div>
    )
  }

  let renderInputRows = () => {
    return Object.entries(fieldAndTagNamesDictionary).map(formField =>
      inputRow(formField[0], formField[1])
    )
  }

  return (
    <div className={'contentful-drip-form'}>
      <form
        action={`https://www.getdrip.com/forms/${props.dripFormId}/submissions`}
        method="post"
        data-drip-embedded-form={props.dripFormId}
      >
        <h3 data-drip-attribute="headline" data-test="headline">
          {props.headline}
        </h3>
        <div
          data-drip-attribute="description"
          data-test="description"
          className="description"
        >
          {props.formDescription.formDescription}
        </div>
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

export default DripForm
