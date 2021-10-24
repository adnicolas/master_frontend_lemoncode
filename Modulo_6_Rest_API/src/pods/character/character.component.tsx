import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import {
  TextFieldComponent,
} from 'common/components';
import { Avatar, Button, Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import Typography from '@mui/material/Typography';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}



export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      //validate={formValidation.validateForm}
    >
      {({values}) => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled/>
          <TextFieldComponent name="species" label="Species" disabled/>
          <TextFieldComponent name="status" label="Status" disabled/>
          <TextFieldComponent name="gender" label="Gender" disabled/>
          <Card>
            <CardHeader
              className={classes.cardHeader}
              title="Best Sentences"
            />
            <CardContent className={classes.cardHeader}>
              <div className={classes.root}>
                <FieldArray
                name="bestSentences"
                render={arrayHelpers => (
                  <div>
                    {values.bestSentences && values.bestSentences.length > 0 ? (
                      values.bestSentences.map((sentence, index) => (
                        <div key={index}>
                          <Field name={`bestSentences.${index}`} type="text" placeholder="Best sentence..."/>
                          <IconButton onClick={() => arrayHelpers.remove(index)} color="secondary">
                            <RemoveIcon/>
                          </IconButton>
                          <IconButton onClick={() => arrayHelpers.insert(index, '')} color="primary">
                              <AddIcon/>
                            </IconButton>
                        </div>
                      ))
                    ) : (
                      <Button onClick={() => arrayHelpers.push('')} color="primary" startIcon={<AddIcon/>}>
                          Add a sentence
                      </Button>
                    )}
                  </div>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          
            
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
