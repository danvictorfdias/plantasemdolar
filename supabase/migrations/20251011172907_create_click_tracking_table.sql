/*
  # Create click tracking table
  
  1. New Tables
    - `click_tracking`
      - `id` (uuid, primary key) - Unique identifier for each click event
      - `clicked_at` (timestamptz) - Timestamp when the click occurred
      - `source_url` (text) - The current page URL where the click happened
      - `destination_url` (text) - The external URL being clicked
      - `button_location` (text) - Identifier for which button/section was clicked (e.g., 'hero', 'offer', 'faqcta')
      - `utm_source` (text, nullable) - UTM source parameter
      - `utm_medium` (text, nullable) - UTM medium parameter
      - `utm_campaign` (text, nullable) - UTM campaign parameter
      - `utm_term` (text, nullable) - UTM term parameter
      - `utm_content` (text, nullable) - UTM content parameter
      - `user_agent` (text, nullable) - Browser user agent for analytics
      - `referrer` (text, nullable) - Document referrer
      - `created_at` (timestamptz) - Record creation timestamp
      
  2. Security
    - Enable RLS on `click_tracking` table
    - Add policy for anonymous users to insert their click data
    - Add policy for authenticated users to read aggregated data (for future dashboard)
    
  3. Performance
    - Add index on `clicked_at` for time-based queries
    - Add index on `button_location` for analytics
*/

CREATE TABLE IF NOT EXISTS click_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clicked_at timestamptz DEFAULT now(),
  source_url text NOT NULL,
  destination_url text NOT NULL,
  button_location text NOT NULL,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  user_agent text,
  referrer text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE click_tracking ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert click tracking data (anonymous tracking)
CREATE POLICY "Anyone can insert click tracking data"
  ON click_tracking
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read click tracking data (for future analytics dashboard)
CREATE POLICY "Authenticated users can read click tracking data"
  ON click_tracking
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_click_tracking_clicked_at ON click_tracking(clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_click_tracking_button_location ON click_tracking(button_location);
CREATE INDEX IF NOT EXISTS idx_click_tracking_destination_url ON click_tracking(destination_url);