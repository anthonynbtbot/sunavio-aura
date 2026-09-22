CREATE TABLE public.pre_etudes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  societe text NOT NULL,
  secteur text NOT NULL,
  ville text NOT NULL,
  nom text NOT NULL,
  fonction text,
  telephone text NOT NULL,
  email text NOT NULL,
  raccordement text,
  puissance_souscrite numeric,
  facture_mensuelle numeric,
  surfaces text[] NOT NULL DEFAULT '{}',
  fichiers text[] NOT NULL DEFAULT '{}',
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.pre_etudes TO service_role;

ALTER TABLE public.pre_etudes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages pre_etudes"
  ON public.pre_etudes FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can upload factures"
  ON storage.objects FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'factures');