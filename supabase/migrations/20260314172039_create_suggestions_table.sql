/*
  # Create documentation suggestions table

  ## Summary
  This migration creates a table to store user suggestions for improving the documentation.

  ## New Tables
  - `suggestions`
    - `id` (uuid, primary key) - unique identifier
    - `name` (text) - submitter's name
    - `email` (text) - submitter's email address
    - `category` (text) - category of the suggestion (e.g. "Tutorial Suggestion", "Content Mistake", etc.)
    - `message` (text) - the suggestion body
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled on `suggestions` table
  - INSERT policy: anyone (including anonymous users) can submit a suggestion
  - SELECT policy: no public read access (only via service role / admin)
*/

CREATE TABLE IF NOT EXISTS suggestions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a suggestion"
  ON suggestions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name <> '' AND
    email <> '' AND
    category <> '' AND
    message <> ''
  );
