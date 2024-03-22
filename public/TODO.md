## Use auth to verify that user can only access its own tasks

### Step 1

In supabase table of 'Task' add a column of user_id which references to user id

### Step 2

In Tasks.jsx

import { useAuth } from "../context/AuthProvider";

const { user } = useAuth();

Add logic to verify that user is viewing their own task only