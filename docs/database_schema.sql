-- Valence Supabase Schema (Example)

-- Core SaaS Tables
CREATE TABLE Organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE Users (
    id UUID PRIMARY KEY REFERENCES auth.users(id), -- Ties to Supabase Auth
    email VARCHAR(255) UNIQUE NOT NULL,
    metadata JSONB
);

CREATE TABLE Memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES Users(id),
    org_id UUID REFERENCES Organizations(id),
    role VARCHAR(50) DEFAULT 'member'
);

CREATE TABLE Subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID REFERENCES Organizations(id),
    plan VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Domain Specific
CREATE TABLE Leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID REFERENCES Organizations(id),
    email VARCHAR(255),
    status VARCHAR(50),
    last_contacted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE Opportunities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID REFERENCES Organizations(id),
    lead_id UUID REFERENCES Leads(id),
    amount DECIMAL,
    status VARCHAR(50)
);
