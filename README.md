### `npm start`

### color palette

#4f74ff
#010319
#0A155A
#3D47Af
#48466B
#BBC2D8
#D103FC
#7D80AA

// Problem specification:

- Task(s) Form

  - title (text)
  - description (text)
  - priority (text) (input)

- Task(s) List

  - List
  - Filter by priority

- Data Storage
  - localStorage

Starting Strategies:

- A:

  - create harcoded tasks list
  - create list component
  - manage filter logic

- B:
  - decision: manual / (formik)
  - validations: manual / (yup)
  - where to manage list
    - inside page
    - (root component (app))
  - handleSubmit
    - store data when adding
    - store data before component removal
