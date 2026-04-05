# Skill Output Sample: user-stories

> **Skill:** `user-stories` | **Plugin:** `pm-execution` | **Input:** "Team invitation feature for a SaaS collaboration tool"

---

## User Stories: Team Invitation — CollabSpace

### Story 1: Invite Team Members by Email

**Title:** Email-Based Team Invitation

**Description:** As a **team admin**, I want to **invite new members by entering their email addresses**, so that **I can quickly grow my team without requiring them to find and sign up on their own**.

**Design:** [Link to Figma — Invite Modal v2]

**Acceptance Criteria:**
1. Admin can enter one or more email addresses (comma-separated or one per line) in the invite modal
2. System validates email format in real-time and highlights invalid entries before sending
3. Each invitee receives an email with a unique, time-limited invite link (expires in 7 days)
4. If the invitee already has a CollabSpace account, they are added to the team immediately upon accepting
5. If the invitee is new, they are guided through a streamlined signup flow that pre-fills their team assignment
6. Admin sees a confirmation summary showing how many invites were sent, already-member skips, and any failures

---

### Story 2: Set Roles During Invitation

**Title:** Role Assignment at Invite Time

**Description:** As a **team admin**, I want to **assign a role (Admin, Editor, Viewer) to each person I invite**, so that **new members have the right permissions from the moment they join**.

**Design:** [Link to Figma — Role Picker Component]

**Acceptance Criteria:**
1. The invite modal includes a role dropdown for each invitee, defaulting to "Editor"
2. Available roles are: Admin, Editor, Viewer — with a tooltip explaining each role's permissions
3. Admin can set different roles for different invitees in the same batch invite
4. The assigned role takes effect immediately when the invitee accepts the invitation
5. Role assignment is recorded in the team audit log with timestamp and inviting admin's identity

---

### Story 3: Track Pending Invitations

**Title:** Invitation Status Dashboard

**Description:** As a **team admin**, I want to **see a list of all pending, accepted, and expired invitations**, so that **I can follow up with people who haven't joined yet and resend invites if needed**.

**Design:** [Link to Figma — Team Members Tab v3]

**Acceptance Criteria:**
1. The Team Settings page shows an "Invitations" tab listing all invites with status (Pending, Accepted, Expired)
2. Pending invitations show the invitee's email, assigned role, date sent, and days until expiration
3. Admin can resend an invitation with one click; the expiration timer resets to 7 days
4. Admin can revoke a pending invitation; the invite link immediately becomes invalid
5. Expired invitations are visually distinct and show a "Resend" action
6. The list is sortable by status, date sent, and email address

---

### Story 4: Accept an Invitation as a New User

**Title:** Invitation Acceptance Flow

**Description:** As an **invited user**, I want to **click the invite link and join the team with minimal friction**, so that **I can start collaborating immediately without a lengthy signup process**.

**Design:** [Link to Figma — Invite Acceptance Flow]

**Acceptance Criteria:**
1. Clicking the invite link opens a landing page showing the team name, inviter's name, and assigned role
2. Existing CollabSpace users are prompted to log in; after login, they are added to the team and redirected to the team workspace
3. New users see a simplified signup form (name + password only; email is pre-filled from the invite)
4. After signup, the user lands directly in the team workspace — not a generic dashboard
5. If the invite link has expired, the user sees a clear message with instructions to request a new invite
6. The flow works on mobile browsers without requiring the desktop app

> *Full story set would include additional stories for bulk invite via CSV, invite link sharing, guest access, and cross-organization invitations.*
