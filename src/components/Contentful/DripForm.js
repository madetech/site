import React from 'react'

const DripForm = props => {
  console.log(props.formDescription.formDescription)
  let result = props.formTags.reduce(function(result, field, index) {
    result[props.formFields[index]] = field
    return result
  }, {})

  let inputRow = (formField, formTag) => {
    let hyphenatedTag = formTag.split('_').join('-')
    return (
      <div>
        <label htmlFor={`drip-${hyphenatedTag}`}>{formField}</label>
        <br />
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
    return Object.entries(result).map(formField =>
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
    </div>
  )
}

export default DripForm
