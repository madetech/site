import React from 'react'

const DripForm = props => {
  return (
    <form
      action={`https://www.getdrip.com/forms/${props.formId}/submissions`}
      method="post"
      data-drip-embedded-form={props.formId}
    >
      <h3 data-drip-attribute="headline" data-test="headline">
        {props.headline}
      </h3>
      <div data-drip-attribute="description" data-test="description">
        {props.description}
      </div>
      <div>
        <label for="drip-email">Email Address</label>
        <br />
        <input type="email" id="drip-email" name="fields[email]" value="" />
      </div>
      <div>
        <label for="drip-first-name">First Name</label>
        <br />
        <input
          type="text"
          id="drip-first-name"
          name="fields[first_name]"
          value=""
        />
      </div>
      <div>
        <label for="drip-last-name">Last Name </label>
        <br />
        <input
          type="text"
          id="drip-last-name"
          name="fields[last_name]"
          value=""
        />
      </div>
      <div style="display: none;" aria-hidden="true">
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
