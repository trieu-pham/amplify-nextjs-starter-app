"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react';
import FileUploader from './fileuploader';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <FileUploader
          acceptedFileTypes={['image/*']}
          path={({ identityId }) => `protected/${identityId}/`}
          autoUpload={false}
          maxFileCount={1}
          isResumable 
        />
      )}
    </Authenticator>
  );
}
