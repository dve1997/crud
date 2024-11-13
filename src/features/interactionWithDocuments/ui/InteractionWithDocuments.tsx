import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/hooks/hooksReduxUpdate';

import Spinner from '../../../shared/ui/spinner';
import Document from '../../../entities/document';
import CreateDocument from '../../../entities/createDocument';
import { store } from '../../../app/store/store';
import {
  documentsAdapter,
  fetchRespDocuments,
} from '../interactionWithDocumentsSlisce';

import interactionWithDocuments from './InteractionWithDocuments.module.scss';

function InteractionWithDocuments() {
  const dispatch = useAppDispatch();
  const statusLoadingDocuments = useAppSelector(
    (state: any) => state.interactionReducer.statusLoadingDocuments,
  );
  const data = documentsAdapter
    .getSelectors((state: any) => state.interactionReducer)
    .selectAll(store.getState());

  useEffect(() => {
    dispatch(fetchRespDocuments());
  }, []);

  return statusLoadingDocuments === 'idle' ? (
    <div className={interactionWithDocuments.spinner}>
      <Spinner />
    </div>
  ) : (
    <div className={interactionWithDocuments.documents}>
      <section className={interactionWithDocuments.list}>
        <h1>List documents</h1>
        {data.map(item => (
          <Document data={item} key={item.id} />
        ))}
      </section>
      <section className={interactionWithDocuments.card}>
        <h1>Create documents</h1>
        <CreateDocument />
      </section>
    </div>
  );
}

export default InteractionWithDocuments;
