import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";

const EditSvg = (props) => {
  return (
    <Dialog
      title={`Edit ${props.item.name}`}
      onClose={props.cancelEdit}
      className="mattersDialog"
    >
      <h2
        style={{
          marginBottom: "20px",
          fontWeight: 500,
        }}
      >
        Edit {props.item.name}
      </h2>
      <Form
        onSubmit={props.onSubmit}
        initialValues={props.item}
        render={(formRenderProps) => (
          <FormElement
            style={{
              maxWidth: 1200,
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <div className="mb-3">
                <Field
                  style={{
                    paddingBottom: "10px",
                  }}
                  name={"name"}
                  component={Input}
                  label={"Room Name"}
                />
              </div>
              <div className="mb-3">
                <Field
                  style={{
                    paddingBottom: "10px",
                  }}
                  name={"no"}
                  component={Input}
                  label={"Room No"}
                />
              </div>
            </fieldset>
            <div className="mattersDialogButtons">
              <button
                className="k-button reverseBtn"
                disabled={!formRenderProps.allowSubmit}
                type={"submit"}
              >
                Update
              </button>
              <button
                className="k-button editBtn"
                onClick={props.cancelEdit}
                type={"submit"}
              >
                Cancel
              </button>
            </div>
          </FormElement>
        )}
      />
    </Dialog>
  );
};

export default EditSvg;
