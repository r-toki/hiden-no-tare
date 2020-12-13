import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const db = admin.firestore()

export const onCreateAuthUser = functions.auth.user().onCreate(async (user) => {
  const authenticatedUser = await admin.auth().getUser(user.uid)
  return db.collection('users').doc(user.uid).set({
    name: authenticatedUser.displayName,
  })
})

export const onCreateNoteDoc = functions.firestore
  .document('notes/{noteId}')
  .onCreate((snap, context) => {
    const history = snap.data().latestHistory
    return db
      .collection(`notes/${context.params.noteId}/histories`)
      .doc(context.eventId)
      .set(history)
  })
