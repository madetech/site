import React from 'react'

const DripForm = props => {
  console.log(props.formDescription)

  let inputRow = fieldName => {
    let hyphenatedFieldName = fieldName.split(' ').join('-')
    let underscoredFieldName = fieldName.split(' ').join('_')
    return (
      <div>
        <label htmlFor={`drip-${hyphenatedFieldName}`}>{fieldName}</label>
        <br />
        <input
          key={hyphenatedFieldName}
          id={`drip-${hyphenatedFieldName}`}
          name={`fields[${underscoredFieldName}]`}
          data-test={fieldName}
          value=""
        />
      </div>
    )
  }

  let renderInputRows = () => {
    return props.formFields.map(formField => inputRow(formField))
  }

  return (
    <form
      action={`https://www.getdrip.com/forms/${props.dripFormId}/submissions`}
      method="post"
      data-drip-embedded-form={props.dripFormId}
    >
      <h3 data-drip-attribute="headline" data-test="headline">
        {props.headline}
      </h3>
      <div data-drip-attribute="description" data-test="description">
        {props.formDescription.formDescription}
      </div>
      {renderInputRows()}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label for="website">Website</label>
        <br />
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
        />
      </div>
    </form>
  )
}

export default DripForm
