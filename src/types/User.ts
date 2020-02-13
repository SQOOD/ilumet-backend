import { objectType, extendType } from 'nexus'	

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.password()
    t.model.class_year()
    t.model.phone()
    t.model.company()
    t.model.gender()
    t.model.industry()
    t.model.home_address()
    t.model.education()
    t.model.education_info()
    t.model.role()
    t.model.picture()
    t.model.approved()
    t.model.post()
    t.model.featured()
    t.model.position()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user()
    t.crud.users({ filtering: true, ordering: true })
  },
})

export const userMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()

    t.crud.updateManyUser()
    t.crud.deleteManyUser()
  },
})